const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/user_db', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use('/api', userRoutes);

app.listen(5000, () => {
    console.log('User service running on port 5000');
});
