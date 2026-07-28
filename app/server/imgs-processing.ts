import {FileRef} from "meteor/ostrio:files";
import {Meteor} from "meteor/meteor";
import fs from "fs";
import gm from "gm";
import {fsStorage, Imgs} from "/imports/api/models/imgs";

const im = gm.subClass({ imageMagick: true });

const bound = Meteor.bindEnvironment((callback) => {
  return callback();
});

const createSizeVersion = (img: FileRef<any>, versionLabel: string, transform: (i: gm.State) => gm.State) => {
  const versionPath = `${fsStorage}/${versionLabel}/${img._id}.avif`;

  transform(im(img.path)).write(versionPath, (writeError) => {
    if (writeError) {
      console.error(`${versionLabel} version not written`, writeError);
      return;
    }

    fs.stat(versionPath, (statError, stats) => {
      bound(() => {
        if (statError) {
          console.error(`${versionLabel} version not readable`, statError);
          return;
        }
        return Imgs.update(img._id, {
          $set: {
            [`versions.${versionLabel}`]: {
              path: versionPath,
              size: stats.size,
              type: 'image/avif',
              name: img.name,
            }
          }
        });
      });
    });
  });
}

// Imgs is available both on server and client, but we'll only ever need the
// resizing callback on server. By defining the callback here, we keep it out
// of the client bundle.
Imgs.onAfterUpload = file => {
  const image = im(file.path);
  image.size((error, features) => {
    bound(() => {
      if (error) {
        console.error('size not readable', error);
        return;
      }

      // Update meta data if original image
      Imgs.collection.update(file._id, {
        $set: {
          'meta.width': features.width,
          'meta.height': features.height,
          'versions.original.meta.width': features.width,
          'versions.original.meta.height': features.height
        }
      });
      createSizeVersion(file, 'thumbnail', i => i.quality(90).resize(300, undefined, '>').gravity('Center'));
      createSizeVersion(file, 'full', i => i.quality(60).resize(1600, undefined, '>'));
    })
  }); // size + bound
};
