const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(201).send({ message: 'Order created successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true, runValidators: true });
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.status(200).send({ message: 'Order updated successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }
        res.status(200).send({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
};
