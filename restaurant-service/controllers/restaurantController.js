const Restaurant = require('../models/restaurantModel');

exports.createRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        await restaurant.save();
        res.status(201).send({ message: 'Restaurant created successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.restaurantId);
        if (!restaurant) {
            return res.status(404).send({ message: 'Restaurant not found' });
        }
        res.status(200).send(restaurant);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true, runValidators: true });
        if (!restaurant) {
            return res.status(404).send({ message: 'Restaurant not found' });
        }
        res.status(200).send({ message: 'Restaurant updated successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.restaurantId);
        if (!restaurant) {
            return res.status(404).send({ message: 'Restaurant not found' });
        }
        res.status(200).send({ message: 'Restaurant deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
};
