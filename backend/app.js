const express = require("express");
const ErrorHandler = require("./middleware/error.js");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/", express.static("uploads"));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env"
    });
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

// User's Routes
const user = require("./controller/user.js");
app.use("/api/v2/user", user);

// Seller's Routes
const seller = require("./controller/seller.js");
app.use("/api/v2/seller", seller);

// Product's Routes
const product = require("./controller/product.js");
app.use("/api/v2/product", product);

// Event's Routes
const event = require("./controller/event.js");
app.use("/api/v2/event", event);

// Coupon's Routes
const coupon = require("./controller/couponCode.js");
app.use("/api/v2/coupon", coupon);

// Error Handling
app.use(ErrorHandler);

module.exports = app;