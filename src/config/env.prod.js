module.exports = {
  env: 'production',
  port: process.env.PORT || 8080,
  db: {
    host: process.env.DB_HOST,
    port: 5432,
    database: 'app_prod',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: { rejectUnauthorized: false },
  },
};