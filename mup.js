require('dotenv').config();
module.exports = {
  servers: {
    one: {
      host: process.env.SSH_HOST,
      username: process.env.SSH_USER,
      pem: '~/.ssh/id_rsa',
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
      PORT: process.env.PROXY_PORT,
      ROOT_URL: 'https://' + process.env.DOMAIN,
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'zodern/meteor:root',
      buildInstructions: [
        'RUN apt-get update && apt-get install -y graphicsmagick'
      ]
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
