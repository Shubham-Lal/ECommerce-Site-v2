const express = require("express");
const router = express.Router();
const singleUpload = require("../multer.js");
const User = require("../model/user.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const jwt = require("jsonwebtoken");
const getDataUrl = require("../utils/dataURL.js");
const { v2 } = require("cloudinary");
const sendMail = require("../utils/sendMail.js");
const catchAsyncError = require("../middleware/catchAsyncError.js");
const sendToken = require("../utils/jwtToken.js");
const { isAuthenticated } = require("../middleware/auth.js");

// User Registration at "/api/v2/user/create-user"
router.post("/create-user", singleUpload, async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });
        if (userEmail) return next(new ErrorHandler("User already exists", 400));

        if (!req.file) return next(new ErrorHandler("Upload profile picture to proceed!", 400));

        const fileURL = getDataUrl(req.file);
        const userImage = await v2.uploader.upload(fileURL.content, { folder: "CertyStore/Account" });
        const user = {
            name: name,
            email: email,
            password: password,
            avatar: userImage.secure_url
        };

        const activationToken = createActivationToken(user);
        const activationUrl = `${process.env.FRONTEND_URL}/activation/${activationToken}`;

        try {
            await sendMail({
                email: user.email,
                subject: "Activate your CertyStore Account",
                message: `Hello ${user.name}, please click on the link ${activationUrl} to verify your account. With regards from CertyStore.`
            });
            res.status(201).json({
                success: true,
                message: `Please check your Email ${user.email} to activate your CertyStore account`,
            });
        }
        catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});

const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "10m"
    });
};

// Activation Token at "/api/v2/user/activation"
router.post("/activation", catchAsyncError(async (req, res, next) => {
    try {
        const { activationToken } = req.body;
        const newUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);

        if (!newUser) return next(new ErrorHandler("Invalid Token", 400));

        const { name, email, avatar, password } = newUser;

        let user = await User.findOne({ email });
        if (user) return next(new ErrorHandler("User already exists!", 400));

        user = await User.create({
            name,
            email,
            avatar,
            password,
        });
        sendToken(user, "user", 201, res);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

// User Login at "/api/v2/user/auth"
router.post("/auth", catchAsyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) return next(new ErrorHandler("Please enter your Email!", 400));
        if (!password) return next(new ErrorHandler("Please enter your Password!", 400));

        const user = await User.findOne({ email }).select("+password");
        if (!user) return next(new ErrorHandler("User doesn't exists!", 400));

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) return next(new ErrorHandler("Try again with correct credentials!", 400));

        sendToken(user, "user", 201, res);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

// Load User
router.post("/getuser", isAuthenticated, catchAsyncError(async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return next(new ErrorHandler("User doesn't exists!", 500));

        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

module.exports = router;