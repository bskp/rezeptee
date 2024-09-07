import {FileRef, FilesCollection} from "meteor/ostrio:files";
import {default as gmImport} from "gm";
import {Meteor} from "meteor/meteor";
import fs from "fs";

let fs_storage = '/images';  // within docker container
if (Meteor.isDevelopment) {
  fs_storage = `${process.env.PWD}/images`;
}

const bound = Meteor.bindEnvironment((callback) => {
  return callback();
});

const gm = gmImport.subClass({ imageMagick: '7+' });

const createSizeVersion = function (img: FileRef<any>, version_label: string, transform: (i: gm.State) => gm.State) {
  const version_path = `${fs_storage}/${version_label}/${img._id}.avif`;

  transform(gm(img.path)).write(version_path, (err) => {
    fs.stat(version_path, (err, stats) => {
      bound(() => {
        if (err) console.log(err)
        let upd = {
          $set: {}
        };
        upd['$set']['versions.' + version_label] = {
          path: version_path,
          size: stats.size,
          type: 'image/avif',
          name: img.name,
          extension: '.avif',
        };
        return Imgs.update(img._id, upd);
      });
    });
  });
}

export const Imgs = new FilesCollection({
  debug: false,
  storagePath: fs_storage,
  permissions: 0o774,
  parentDirPermissions: 0o774,
  collectionName: 'imgs',
  allowClientCode: true, // Allow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024 * 1024 * 10 && /png|jpg|jpeg|webp|avif|heic/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  },

  onAfterUpload: function (file) {
    const image = gm(file.path);
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
        createSizeVersion(file, 'full', i => i.quality(80).resize('1600>'));
      })
    }); // size + bound
  }
});