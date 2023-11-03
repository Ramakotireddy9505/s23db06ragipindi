const express = require('express');
const router = express.Router();

// Sample data for food
const foodData = [
  { food_name: 'Food A', food_type: 'Biryani', origin: 'Italian', rating: 4.5 },
  { food_name: 'Food B', food_type: 'Beverage', origin: 'Mexican', rating: 4.2 },
  { food_name: 'Food C', food_type: 'Fast Food', origin: 'Indian', rating: 4.9 },
  // Add more food data here
];

router.get('/', (req, res) => {
  // Render the 'food' Pug template with the food data
  res.render('food', { title: 'Search Results - Food', results: foodData });
});

module.exports = router;
