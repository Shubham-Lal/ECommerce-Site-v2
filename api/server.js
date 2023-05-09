const app = require("./app.js");
const connectDatabase = require("./db/Database.js");
const mongoose = require("mongoose");

// Handle uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`unCaughtException Error: ${err.message}`);
    // console.log("Stopping server for unCaughtException Error...");
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env",
    });
}

// Connecting to Database and listening to server
const PORT = process.env.PORT;
connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})

// On Backend Call at "/"
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CertyStore's API",
    });
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`unhandledRejection Error..., ${err.message}`);
    console.log("Stopping server for unhandledRejection Error...");

    // server.close(() => {
    //     process.exit(1);
    // });
});