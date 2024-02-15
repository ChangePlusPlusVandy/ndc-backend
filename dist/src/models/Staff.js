"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const StaffSchema = new Schema({
    firebaseUid: {
        type: String,
        required: true
    },
    id: {
        type: mongodb_1.ObjectId,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date
    }
});
module.exports = mongoose.model("Staff", StaffSchema, "staff");
//# sourceMappingURL=Staff.js.map