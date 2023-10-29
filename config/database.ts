const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo! Success!");
    } catch (err) {
        console.error((err as Error).message);
    }
};

export { connectDB };
