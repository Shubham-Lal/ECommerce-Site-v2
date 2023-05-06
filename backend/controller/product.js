const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middleware/catchAsyncError");
const Seller = require("../model/seller.js");
const Product = require("../model/product.js");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSellerAuthenticated } = require("../middleware/auth");

// Add Product at "/api/v2/product/add-product"
router.post("/add-product", upload.array("images"), catchAsyncError(async (req, res, next) => {
    try {
        const sellerId = req.body.sellerId;
        const seller = await Seller.findById(sellerId);
        if (!seller) return next(new ErrorHandler("Seller ID is invalid!", 400));

        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrls;
        productData.seller = seller;

        const product = await Product.create(productData);
        res.status(201).json({
            success: true,
            product,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// Get Products at "/api/v2/product/get-products/:id"
router.get("/get-products/:id", catchAsyncError(async (req, res, next) => {
    try {
        const products = await Product.find({ sellerId: req.params.id });

        res.status(201).json({
            success: true,
            products,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

// Delete Product at "/api/v2/product/delete-product/:id"
router.delete("/delete-product/:id", catchAsyncError(async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) return next(ErrorHandler("Product not found!", 500));

        res.status(201).json({
            success: true,
            message: "Product removed successfully!",
        });
    }
    catch (error) {
        return next(new ErrorHandler(error, 400));
    }
}));

module.exports = router;