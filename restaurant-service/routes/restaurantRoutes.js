const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const router = express.Router();

router.post('/restaurants', restaurantController.createRestaurant);
router.get('/restaurants/:restaurantId', restaurantController.getRestaurant);
router.put('/restaurants/:restaurantId', restaurantController.updateRestaurant);
router.delete('/restaurants/:restaurantId', restaurantController.deleteRestaurant);

module.exports = router;
