import {FilesCollection} from "meteor/ostrio:files";
import {Meteor} from "meteor/meteor";

// Im Docker-Container liegen die Bilder auf einem Volume, lokal im Projekt.
export const fsStorage = Meteor.isDevelopment ? `${process.env.PWD}/images` : '/images';

// Bewusst frei von gm/fs: über imports/ui/Images.tsx landet diese Datei auch
// im Client-Bundle. Der klassische Bundler stopfte Node-Builtins still per
// meteor-node-stubs zu, rspack tut das nicht -- und der Browser braucht von
// hier ohnehin nur die Collection. Die Bildverarbeitung nach dem Upload hängt
// server/imgs-processing.ts ein.
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
