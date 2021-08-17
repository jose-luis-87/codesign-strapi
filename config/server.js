module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd32451a0a9a77bfe74d376059407776a'),
    },
  },
  settings:{
    cors: {
      enabled: true,
      origin: ['*']
    }
  }
});
