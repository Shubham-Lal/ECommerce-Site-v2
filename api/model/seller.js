const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
        default: "Seller",
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
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

// Hash password
sellerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// JWT Token
sellerSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

// Comapre Password
sellerSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Seller", sellerSchema);
