// models/review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
