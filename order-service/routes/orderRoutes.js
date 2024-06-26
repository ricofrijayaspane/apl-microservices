const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders/:orderId', orderController.getOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
