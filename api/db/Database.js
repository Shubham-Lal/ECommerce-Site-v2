const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = connectDatabase;