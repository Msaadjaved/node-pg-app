module.exports = {
  env: 'development',
  port: 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    database: 'app_dev',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '',
  },
};