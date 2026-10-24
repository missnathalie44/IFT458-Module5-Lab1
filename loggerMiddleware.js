// Logger Middleware
// Module 5 Lab 1 - IFT 458

function loggerMiddleware(req, res, next) {
    const currentTime = new Date().toLocaleString();

    console.log(`[${currentTime}] ${req.method} ${req.url}`);

    next();
}

module.exports = loggerMiddleware;