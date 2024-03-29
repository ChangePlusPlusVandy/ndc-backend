import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const PartnerSchema = new Schema({
    firebaseUid: {
        type: String,
        required: true,
    },
    id: {
        type: ObjectId,
    },
    orders: [{
        type: Schema.Types.ObjectID,
        ref: "Order",
    }],
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: [
            'COMMUNITY',
            'CLINIC',
            'DFD',
            'SCHOOL',
        ],
        // required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateJoined: {
        type: Date,
    },
    numOrdersMonth: {
        type: Number,
        // required: true,
    },
    numOrdersYTD: {
        type: Number,
        // required: true,
    },
    numOrdersTotal: {
        type: Number,
        // required: true,
    },
    location: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    deliveryInstructions: {
        type: String,
    },
})

module.exports = mongoose.model("Partner", PartnerSchema);
