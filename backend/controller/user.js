const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer.js");
const User = require("../model/user.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail.js");
const catchAsyncError = require("../middleware/catchAsyncError.js");
const sendToken = require("../utils/jwtToken.js");

// On Backend Call at "/api/v2/user"
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CertyStore's API",
    });
});

// User Registration at "/api/v2/user/create-user"
router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error deleting file" });
                }
            });
            return next(new ErrorHandler("User already exists", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl,
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
                message: `Please check your email ${user.email} to activate your CertyStore account`,
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
        sendToken(user, 201, res);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}));

module.exports = router;