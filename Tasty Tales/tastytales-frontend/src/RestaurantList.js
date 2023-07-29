import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurants from the backend
    axios.get('http://localhost:5000/restaurants')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>Location: {restaurant.location}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Price Range: {restaurant.priceRange}</p>
            <p>Average Rating: {restaurant.averageRating}</p>
            <p>Total Reviews: {restaurant.totalReviews}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
