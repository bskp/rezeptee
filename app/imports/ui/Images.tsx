import React, {useState} from "react";
import {useSubscribe, useTracker} from "meteor/react-meteor-data";
import classNames from "classnames";
import {Imgs} from "/imports/api/models/imgs";

export function Image({id, alt}) {
  // @ts-ignore
  const src = `${Imgs.downloadRoute}/imgs/${id}/full/${id}`;
  return <div className="img">
    <img src={src} alt={alt}/>
    <div className="legend">{alt}</div>
  </div>
}

export function ImageList(props: { namespace: string }) {
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
             src={Imgs.link(img, 'thumbnail')}
             alt={img.name}
             onDragStart={event => {
               const tag = `\n\n![](${img._id})\n\n`;
               event.dataTransfer.setData('text/plain', tag);
               event.dataTransfer.effectAllowed = 'copy';
               event.dataTransfer.setData('text/x-img-id', img._id);
               setDragInProgress(img._id);
             }}
             onDragEnd={event => {
               setDragInProgress("");
             }}
        />
      </li>;
    });
  }

  return <ul id="imagelist">
    <Uploader dragInProgress={dragInProgress.length > 0} namespace={props.namespace}/>
    {images}
  </ul>
}

function Uploader(props: { dragInProgress: boolean, namespace: string }) {
  let [dragOver, setDragOver] = useState(false);
  let [progress, setProgress] = useState(-1);
  const insert = (files: FileList) => {
    for (const file of files) {
      Imgs.insert({
        file: file,
        meta: {namespace: props.namespace},
        chunkSize: 'dynamic',
        onStart: () => {
          setProgress(0)
        },
        onProgress: (progress) => {
          setProgress((currentProgress) => currentProgress >= 0 ? progress / 100.0 : -1);
        },
        onUploaded: (error, fileRef) => {
          setProgress(-1);
          if (error) {
            alert('Error during upload: ' + error);
            return;
          }
          let label = fileRef.name.split('.')[0];
        },
      }, true);
    }

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
    if (img_id) {
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
