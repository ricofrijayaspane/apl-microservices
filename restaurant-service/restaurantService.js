const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/restaurant_db', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use('/api', restaurantRoutes);

app.listen(5001, () => {
    console.log('Restaurant service running on port 5001');
});
