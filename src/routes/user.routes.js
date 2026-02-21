const router = require('express').Router();
const userService = require('../services/user.service');

router.get('/', async (req, res) => {
  const { rows } = await userService.getAll();
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const { rows } = await userService.getById(req.params.id);
  if (!rows.length) return res.status(404).json({ error: 'User not found' });
  res.json(rows[0]);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
  const { rows } = await userService.create(name, email);
  res.status(201).json(rows[0]);
});

router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  const { rows } = await userService.update(req.params.id, name, email);
  if (!rows.length) return res.status(404).json({ error: 'User not found' });
  res.json(rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { rows } = await userService.remove(req.params.id);
  if (!rows.length) return res.status(404).json({ error: 'User not found' });
  res.json({ message: 'Deleted', user: rows[0] });
});

module.exports = router;