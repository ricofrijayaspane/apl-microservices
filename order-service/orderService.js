const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/order_db', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use('/api', orderRoutes);

app.listen(5002, () => {
    console.log('Order service running on port 5002');
});
