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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
    next();
});

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env"
    });
}

// Routes
const user = require("./controller/user.js");
app.use("/api/v2/user", user);

// Error Handling
app.use(ErrorHandler);

module.exports = app;