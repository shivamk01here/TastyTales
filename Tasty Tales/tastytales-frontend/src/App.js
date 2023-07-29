import React from 'react';
import RestaurantList from './RestaurantList';
import ReviewList from './ReviewList';

const App = () => {
  return (
    <div>
      <RestaurantList />
      <ReviewList restaurantId="restaurant_id_here" />
    </div>
  );
};

export default App;
