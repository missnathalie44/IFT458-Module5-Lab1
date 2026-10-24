// Module 5 Lab 1 - IFT 458
// Express Server with Logger Middleware

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Use the logger middleware for incoming requests
app.use(loggerMiddleware);

// Home page route
app.get('/', (req, res) => {
    res.send('Welcome to Module 5 Lab 1 - Middleware is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});