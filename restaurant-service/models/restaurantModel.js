const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    menu: [String]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
