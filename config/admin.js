module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27fe5ff78a9db4545d50ee9368bffce6'),
  },
});
