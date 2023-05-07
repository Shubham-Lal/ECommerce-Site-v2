const express = require("express");
const router = express.Router();
const catchAsyncError = require("../middleware/catchAsyncError");
const CouponCode = require("../model/couponCode.js");
const ErrorHandler = require("../utils/ErrorHandler");

// Create Coupon Code at "/api/v2/coupon/create-coupon"
router.post("/create-coupon", catchAsyncError(async (req, res, next) => {
    try {
        const couponCode = await CouponCode.find({ name: req.body.name });
        if (couponCode.length !== 0) return next(new ErrorHandler("Coupon already exists!", 400));

        const coupon = await CouponCode.create(req.body);

        res.status(201).json({
            success: true,
            coupon,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// Get all Coupons at "/api/v2/coupon/get-coupons/:id"
router.get("/get-coupons/:id", catchAsyncError(async (req, res, next) => {
    try {
        const coupons = await CouponCode.find({ sellerId: req.params.id });

        res.status(201).json({
            success: true,
            coupons,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

module.exports = router;