require('dotenv').config();
module.exports = {
  servers: {
    one: {
      host: process.env.SSH_HOST,
      username: process.env.SSH_USER,
      pem: '~/.ssh/id_rsa_github_actor',
    }
  },

  app: {
    name: 'rezept-ee',
    path: './app',
    volumes: {
      '/home/maroggo/images_rezepte':'/images'
    },

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      debug: false
    },

    env: {
      PORT: 7000,
      ROOT_URL: 'https://rezept.ee',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'zodern/meteor:root',
      buildInstructions: [
        'RUN apt-get update && apt-get install -y imagemagick'
      ]
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    version: '5.0.26',
    servers: {
      one: {}
    }
  }
};
