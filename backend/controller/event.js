const express = require("express");
const router = express.Router();
const singleUpload = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Seller = require("../model/seller.js");
const Event = require("../model/event.js");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");

// Create Event at "/api/v2/event/create-event"
// router.post("/create-event", upload.array("images"), catchAsyncError(async (req, res, next) => {
router.post("/create-event", singleUpload, catchAsyncError(async (req, res, next) => {
    try {
        const sellerId = req.body.sellerId;
        const seller = await Seller.findById(sellerId);
        if (!seller) return next(new ErrorHandler("Seller ID is invalid!", 400));

        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.seller = seller;

        const product = await Event.create(eventData);
        res.status(201).json({
            success: true,
            product,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// Get Events at "/api/v2/event/get-events/:id"
router.get("/get-events/:id", catchAsyncError(async (req, res, next) => {
    try {
        const events = await Event.find({ sellerId: req.params.id });

        res.status(201).json({
            success: true,
            events,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// Delete Event at "/api/v2/event/delete-event/:id"
router.delete("/delete-event/:id", catchAsyncError(async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const eventData = await Event.findById(eventId);
        if (!eventData) return next(ErrorHandler("Event not found!", 500));

        eventData.images.forEach((imageURL) => {
            const fileName = imageURL;
            const filePath = `uploads/${fileName}`;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error deleting file" });
                }
            });
        });

        await Event.findByIdAndDelete(eventId);

        res.status(201).json({
            success: true,
            message: "Event removed successfully!",
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

module.exports = router;