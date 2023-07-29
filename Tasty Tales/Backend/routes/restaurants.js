// routes/restaurants.js

const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

// Route to get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants', error });
  }
});

// Route to add a new restaurant
router.post('/', async (req, res) => {
  const { name, location, cuisine, priceRange } = req.body;

  try {
    const newRestaurant = new Restaurant({
      name,
      location,
      cuisine,
      priceRange,
    });

    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error adding restaurant', error });
  }
});

module.exports = router;
