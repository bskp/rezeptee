import React, {useState} from "react";
import {useSubscribe, useTracker} from "meteor/react-meteor-data";
import classNames from "classnames";
import {Imgs} from "/imports/api/models/imgs";
import {FileRef} from "meteor/ostrio:files";

export function Image({id, alt}) {
  // @ts-ignore
  const src = `${Imgs.downloadRoute}/imgs/${id}/full/${id}`;
  return <figure className="img">
    <img src={src} alt={alt}/>
    <figcaption>{alt}</figcaption>
  </figure>
}

export const ImageList = (props: {
  namespace: string,
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const isLoadingImages = useSubscribe('files.imgs.all');
  let [dragInProgress, setDragInProgress] = useState("");

  const imagesCursor = useTracker(() =>
      Imgs.find({'meta.namespace': props.namespace}).fetch().reverse(),
    []);

  let images;
  if (isLoadingImages()) {
    images = <li>Lade Bilder…</li>
  } else {
    images = imagesCursor.map(img => {
      return <li key={img._id} className={dragInProgress == img._id ? "gone" : undefined}>
        <img draggable="true"
             src={Imgs.link(img as FileRef<{ [p: string]: any }>, 'thumbnail')}
             alt={img.name}
             onError={$event => $event.currentTarget.classList.add('x')}
             onLoad={$event => $event.currentTarget.classList.remove('x')}
             onDragStart={event => {
               const tag = `\n\n![${img.name}](${img._id})\n\n`;
               event.dataTransfer.setData('text/plain', tag);
               event.dataTransfer.effectAllowed = 'copy';
               event.dataTransfer.setData('text/x-img-id', img._id);
               setDragInProgress(img._id);
             }}
             onDragEnd={event => {
               setDragInProgress("");
             }}
        /><span>{img._id}</span>
      </li>;
    });
  }

  const confirmImageDeletion = (id: string): boolean => {
    if (!props.text.includes(id)) {
      return true;
    }
    if (!window.confirm(`Dieses Bild (${id}) wird im Rezept verwendet. Willst du es wirklich löschen?`)) {
      return false;
    }
    const re = new RegExp(`!\\[.*?]\\(${id}\\)`, 'g')
    props.setText(text => text.replace(re, ''));
    return true;
  }

  return <>
    <Uploader dragInProgress={dragInProgress.length > 0} namespace={props.namespace}
              confirmImageDeletion={confirmImageDeletion}/>
    <ul id="imagelist">
      {images}
    </ul>
  </>
};

function Uploader(props: {
  dragInProgress: boolean,
  namespace: string,
  confirmImageDeletion: (id: string) => boolean
}) {
  let [dragOver, setDragOver] = useState(false);
  let [progress, setProgress] = useState(-1);
  const insert = (files: FileList) => {
    const progress = Array(files.length).fill(0);
    [...files].forEach((file, i) => {
      const fileProgress = (p: number) => {
        progress[i] = p;
        const sum = progress.reduceRight((acc, cur) => acc + cur, 0);
        let ratio = sum / files.length;
        setProgress(ratio < 1 ? ratio : -1);
      }
      Imgs.insert({
        file: file,
        meta: {namespace: props.namespace},
        chunkSize: 'dynamic',
        onStart: () => {
          fileProgress(0);
        },
        onProgress: (progress) => {
          //setProgress((currentProgress) => currentProgress >= 0 ? progress / 100.0 : -1);
          fileProgress(progress / 100);
        },
        onUploaded: (error, fileRef) => {
          fileProgress(1);
          if (error) {
            alert('Error during upload: ' + error);
            return;
          }
        },
      }, true);
    });
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    if (event.currentTarget.files?.length) {
      insert(event.currentTarget.files);
    }
  }


  const handleDrop: React.DragEventHandler = event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files.length) {
      setDragOver(false);
      insert(event.dataTransfer.files);
    }
    let img_id = event.dataTransfer.getData('text/x-img-id');
    if (img_id && props.confirmImageDeletion(img_id)) {
      Imgs.remove({_id: img_id});
      setDragOver(false);
      setProgress(-1);
    }
  }

  const nop = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  const printing = progress >= 0 ?
    <li id="blueprint" style={{marginTop: `-${5.5 * (1 - progress)}em`}}></li> : undefined;

  const className = classNames({
    'over': dragOver,
    'x': props.dragInProgress
  });

  return <>
    <label
      id="dropzone"
      className={className}
      onDrop={handleDrop}
      onDragEnter={() => setDragOver(true)}
      onDragExit={() => setDragOver(false)}
      onDragOver={nop}>
      <input type="file"
             accept="image/*"
             multiple={true}
             onChange={handleChange}/>
    </label>
    {printing}
  </>
}
