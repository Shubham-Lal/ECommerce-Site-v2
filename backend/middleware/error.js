const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong MongoDB ID error
    if (err.name === "CastError") {
        const message = `Resources not found with this ID ${err.path}`;
        // err = new ErrorHandler(message, 400);
    }

    // Duplicate Key error
    if (err.code === 1100) {
        const message = `Duplicate key ${Object.keys(err.keyValue)} provided...`;
        // err = new ErrorHandler(message, 400);
    }

    // Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const message = `Your URL is invalid! Please try again later...`;
        // err = new ErrorHandler(message, 400);
    }

    // JWT expire
    if (err.name === "TokenExpiredError") {
        const message = `Your URL is expired! Please try again later...`;
        // err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};