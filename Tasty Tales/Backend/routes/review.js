// routes/reviews.js

const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');

// Route to get all reviews for a restaurant
router.get('/:restaurantId/reviews', async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const reviews = await Review.find({ restaurant: restaurantId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
});

// Route to add a new review for a restaurant
router.post('/:restaurantId/reviews', async (req, res) => {
  const { restaurantId } = req.params;
  const { user, rating, comment } = req.body;

  try {
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const newReview = new Review({
      restaurant: restaurantId,
      user,
      rating,
      comment,
    });

    await newReview.save();

    // Update restaurant's average rating and total reviews count
    restaurant.averageRating = (restaurant.averageRating * restaurant.totalReviews + rating) / (restaurant.totalReviews + 1);
    restaurant.totalReviews += 1;
    await restaurant.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
});

module.exports = router;
