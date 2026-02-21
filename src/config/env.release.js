module.exports = {
  env: 'release',
  port: 3001,
  db: {
    host: process.env.DB_HOST,
    port: 5432,
    database: 'app_release',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};