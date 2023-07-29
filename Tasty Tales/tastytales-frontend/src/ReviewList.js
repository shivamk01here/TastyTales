import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ restaurantId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specific restaurant from the backend
    axios.get(`http://localhost:5000/reviews/${restaurantId}/reviews`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [restaurantId]);

  return (
    <div>
      <h2>Reviews for {restaurantId}</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>User: {review.user}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
