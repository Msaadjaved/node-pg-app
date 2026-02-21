const express = require('express');
const config = require('./config');
const { createTable } = require('./models/user.model');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const start = async () => {
  await createTable();
  app.listen(config.port, () => {
    console.log(`[App] Running in "${config.env}" mode on port ${config.port}`);
  });
};

start().catch((err) => {
  console.error('[App] Failed to start:', err);
  process.exit(1);
});