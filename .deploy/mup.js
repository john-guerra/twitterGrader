module.exports = {
  servers: {
    one: {
      host: '54.236.233.192',
      username: 'ubuntu',
      pem: '/Users/aguerra/Dropbox/tweetometro_paz.pem'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'twitterGrader',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://54.236.233.192',
      MONGO_URL: 'mongodb://localhost/tweetometro'
    },

    //dockerImage: 'kadirahq/meteord'
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};