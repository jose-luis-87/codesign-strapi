<<<<<<< HEAD
<<<<<<< HEAD
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'codesignbd.qhxlp.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'codesignDB'),
        username: env('DATABASE_USERNAME', 'Admin'),
        password: env('DATABASE_PASSWORD', '12345'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
=======
=======
>>>>>>> parent of 11d4409 (server)
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'codesignbd.qhxlp.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'codesignDB'),
<<<<<<< HEAD
        username: env('DATABASE_USERNAME', 'Admin'),
        password: env('DATABASE_PASSWORD', '12345'),
=======
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
>>>>>>> parent of 11d4409 (server)
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
<<<<<<< HEAD
>>>>>>> 5c4b4a1fdf05101e6b4895ce256d6472cc82f164
=======
>>>>>>> parent of 11d4409 (server)
