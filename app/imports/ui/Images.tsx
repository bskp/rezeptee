import {Imgs} from "/imports/api/models";
import React, {useState} from "react";
import {useSubscribe, useTracker} from "meteor/react-meteor-data";
import classNames from "classnames";

export function Image({id, alt}) {
  const src = `${Imgs.downloadRoute}/imgs/${id}/full/${id}`;
  return <img className="asdf" src={src} alt={alt}/>
}

export function ImageList(props) {
  const isLoadingImages = useSubscribe('files.imgs.all');
  let [dragInProgress, setDragInProgress] = useState("");

  const imagesCursor = useTracker(() => Imgs.find().fetch().reverse(), []);

  let images;
  if (isLoadingImages()) {
    images = <li>Lade Bilder…</li>
  } else {
    images = imagesCursor.map(img => {
      console.log(img.createdAt);
      return <li className={dragInProgress == img._id ? "gone" : undefined}>
        <img draggable="true"
             src={Imgs.link(img, 'thumbnail')}
             alt={img.name}
             className={(Date.now() - img.updatedAt) < 1000*5 ? "fresh" : undefined}
             onDragStart={event => {
               //const tag = `\n![${img.name}](${Imgs.link(img, 'thumbnail')})\n`;
               const tag = `\n![${img.name}](${img._id})\n`;
               event.dataTransfer.setData('text/plain', tag);
               event.dataTransfer.effectAllowed = 'linkMove';
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

  return <aside id="images">
    <ul id="imagelist">
      <Uploader dragInProgress={dragInProgress.length > 0}/>
      {images}
    </ul>
  </aside>
}


function Uploader(props: { dragInProgress: boolean }) {

  let [dragOver, setDragOver] = useState(false);
  let [progress, setProgress] = useState(-1);

  const handleDrop: React.DragEventHandler = event => {

    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files.length) {
      for (const file of event.dataTransfer.files) {
        Imgs.insert({
          file: file,
          chunkSize: 'dynamic',
          onStart: () => {
            setProgress(0)
          },
          onProgress: (progress) => {
            setProgress((currentProgress) => currentProgress >= 0 ? progress / 100.0 : -1);
          },
          onUploaded: (error, fileRef) => {
            setDragOver(false);
            setProgress(-1);
            if (error) {
              alert('Error during upload: ' + error);
              return;
            }
            let label = fileRef.name.split('.')[0];
          },
        }, true);
      }
      return;
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

  console.log("render progress " + progress);
  return <>
    <li id="dropzone"
        className={className}
        onDrop={handleDrop}
        onDragEnter={() => setDragOver(true)}
        onDragExit={() => setDragOver(false)}
        onDragOver={nop}>
    </li>
    {printing}
  </>
}
