const mongoose = require("mongoose");

const couponCodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your coupon's name!"],
        unique: true,
    },
    value: {
        type: Number,
        required: true,
    },
    minAmount: {
        type: Number,
    },
    maxAmount: {
        type: Number,
    },
    selectedProduct: {
        type: String,
    },
    sellerId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("CouponCode", couponCodeSchema);