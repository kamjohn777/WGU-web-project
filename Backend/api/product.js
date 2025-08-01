const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch product data from the API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Failed to fetch product data' });
  }
});

module.exports = router;