const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const apiProxy = httpProxy.createProxyServer();

const userService = 'http://user-service:5000';
const restaurantService = 'http://restaurant-service:5001';
const orderService = 'http://order-service:5002';

app.all('/api/users/*', (req, res) => {
    apiProxy.web(req, res, { target: userService });
});

app.all('/api/restaurants/*', (req, res) => {
    apiProxy.web(req, res, { target: restaurantService });
});

app.all('/api/orders/*', (req, res) => {
    apiProxy.web(req, res, { target: orderService });
});

app.listen(80, () => {
    console.log('API Gateway running on port 80');
});
