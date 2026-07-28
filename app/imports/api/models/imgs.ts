import {FilesCollection} from "meteor/ostrio:files";
import {Meteor} from "meteor/meteor";

// Local/dev: images are in a folder, Dockerized: on a volume
export const fsStorage = Meteor.isDevelopment ? `${process.env.PWD}/images` : '/images';

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
});
