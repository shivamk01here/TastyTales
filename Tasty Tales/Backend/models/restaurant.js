// models/restaurant.js

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  priceRange: { type: String, required: true },
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
