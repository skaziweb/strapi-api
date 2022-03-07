module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3dd5da4a83772fd2be851c65824253eb'),
  },
});
