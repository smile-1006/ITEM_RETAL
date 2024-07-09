const express = require('express');
const Rental = require('../models/Rental');
const router = express.Router();

// Create Rental
router.post('/', async (req, res) => {
  const { item, renter, startDate, endDate } = req.body;
  try {
    const rental = new Rental({ item, renter, startDate, endDate });
    await rental.save();
    res.status(201).send('Rental created');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get All Rentals
router.get('/', async (req, res) => {
  try {
    const rentals = await Rental.find().populate('item').populate('renter', 'name email');
    res.json(rentals);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
