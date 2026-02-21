const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.db);

pool.on('connect', () => {
  console.log(`[DB] Connected to PostgreSQL (${config.env})`);
});

pool.on('error', (err) => {
  console.error('[DB] Unexpected error:', err);
  process.exit(1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};