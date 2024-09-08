import {FileRef, FilesCollection} from "meteor/ostrio:files";
import {Meteor} from "meteor/meteor";
import fs from "fs";
import gm from "gm";

const im = gm.subClass({ imageMagick: true });

let fsStorage = '/images';  // within docker container
if (Meteor.isDevelopment) {
  fsStorage = `${process.env.PWD}/images`;
}

const bound = Meteor.bindEnvironment((callback) => {
  return callback();
});

const createSizeVersion = (img: FileRef<any>, versionLabel: string, transform: (i: gm.State) => gm.State) => {
  const versionPath = `${fsStorage}/${versionLabel}/${img._id}.avif`;

  transform(im(img.path)).write(versionPath, (err) => {
    fs.stat(versionPath, (err, stats) => {
      bound(() => {
        if (err) console.log(err)
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

export const Imgs = new FilesCollection({
  debug: false,
  storagePath: fsStorage,
  permissions: 0o774,
  parentDirPermissions: 0o774,
  collectionName: 'imgs',
  allowClientCode: true, // Allow remove files from Client
  onBeforeUpload: file => {
    if (file.size > 1024 * 1024 * 10) {
      return 'Bild muss kleiner als 10MB sein';
    }
    if (!(/png|jpg|jpeg|webp|avif|heic/i.test(file.extension))) {
      return 'Folgende Bildformate werden unterstützt: .png, .jpg, .webp, .avif, .heic';
    }
    return true;
  },

  onAfterUpload: file => {
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
        createSizeVersion(file, 'thumbnail', i => i.quality(90).resize('300>').gravity('Center'));
        createSizeVersion(file, 'full', i => i.quality(60).resize('1600>'));
      })
    }); // size + bound
  }
});