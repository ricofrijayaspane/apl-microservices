const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    restaurantId: String,
    items: [String],
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
