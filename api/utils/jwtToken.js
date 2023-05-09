const sendToken = (user, tokenType, statusCode, res) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(statusCode).cookie(tokenType === "user" ? "token" : "sellerToken", token, options).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;