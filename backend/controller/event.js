const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Seller = require("../model/seller.js");
const Event = require("../model/event.js");
const ErrorHandler = require("../utils/ErrorHandler");

// Create Event at "/api/v2/event/create-event"
router.post("/create-event", upload.array("images"), catchAsyncError(async (req, res, next) => {
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

module.exports = router;