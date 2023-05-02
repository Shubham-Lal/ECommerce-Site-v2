const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncError = require("./catchAsyncError.js");
const jwt = require("jsonwebtoken");
const User = require("../model/user.js");
const Seller = require("../model/seller.js");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.body;
    // const { token } = req.cookies;
    if (!token) return next(new ErrorHandler("Please login to continue...", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
});

exports.isSellerAuthenticated = catchAsyncError(async (req, res, next) => {
    const { sellerToken } = req.body;
    if (!sellerToken) return next(new ErrorHandler("Please login to continue...", 401));

    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET_KEY);
    req.seller = await Seller.findById(decoded.id);
    next();
});