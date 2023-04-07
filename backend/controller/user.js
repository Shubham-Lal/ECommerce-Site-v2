const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer.js");
const User = require("../model/user.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail.js");

// On Backend Call at "/api/v2/user"
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CertyStore's API",
    });
});

// User Registration
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
                else {
                    res.json({ message: "File deleted successfully" });
                }
            });
            // return next(new ErrorHandler("User already exists", 400));
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
            // return next(new ErrorHandler(error.message, 500));
        }
    }
    catch (error) {
        // return next(new ErrorHandler(error.message, 400));
    }
});

// Activation Token
const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "10m"
    });
};

// Activate User
module.exports = router;