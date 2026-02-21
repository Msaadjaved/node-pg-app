require('dotenv').config();

const ENV = process.env.APP_ENV || 'dev';

const configs = {
  dev:     () => require('./env.dev'),
  release: () => require('./env.release'),
  prod:    () => require('./env.prod'),
};

if (!configs[ENV]) {
  throw new Error(`Unknown APP_ENV: "${ENV}". Must be dev, release, or prod.`);
}

module.exports = configs[ENV]();