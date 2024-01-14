import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const StaffSchema = new Schema({
    firebaseUid: {
        type: String,
        required: true
    },
    id: {
        type: ObjectId,
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

module.exports = mongoose.model(
    "Staff",
    StaffSchema,
    "staff"
);
