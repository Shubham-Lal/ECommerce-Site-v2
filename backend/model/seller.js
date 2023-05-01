const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Shop name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your or business email address"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter your business Phone number"],
    },
    address: {
        type: String,
        required: [true, "Please enter your business address"],
    },
    zipCode: {
        type: Number,
        required: [true, "Please enter your Zip Code"],
    },
    role: {
        type: String,
        default: "seller",
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password should be greater than 6 characters"],
        select: false,
    },
    avatar: {
        type: String,
        required: [true, "Please upload your Shop logo"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model("Seller", sellerSchema);
