const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    try {
        await user.save();
        res.status(201).send({ message: 'User created successfully', user });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateUser = async (req, res) => {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, { name, email, password }, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User updated successfully', user });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
};
