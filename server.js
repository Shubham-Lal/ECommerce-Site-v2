const app = require("./backend/app.js");
const { v2 } = require("cloudinary");
const connectDatabase = require("./backend/db/Database.js");

// Handle uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`unCaughtException Error: ${err.message}`);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./backend/config/.env",
    });
}

// Cloudinary
v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connecting to Database and listening to server
const PORT = process.env.PORT || 8000;
connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});

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
});