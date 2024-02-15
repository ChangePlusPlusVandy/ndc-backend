"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo! Success!");
    }
    catch (err) {
        console.error(err.message);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=database.js.map