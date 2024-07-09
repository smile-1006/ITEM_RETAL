const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Create Item
router.post('/', async (req, res) => {
  const { name, description, price, owner } = req.body;
  try {
    const item = new Item({ name, description, price, owner });
    await item.save();
    res.status(201).send('Item created in Inventry');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get All Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().populate('owner', 'name email');
    res.json(items);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
