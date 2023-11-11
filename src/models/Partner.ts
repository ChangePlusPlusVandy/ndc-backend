import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const PartnerSchema = new Schema({
    orders: {
        type: Array,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    type: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String
    },
    dateJoined: {
        type: Date
    },
    numOrdersMonth: {
        type: Number
    },
    numOrdersYTD: {
        type: Number
    },
    numOrdersTotal: {
        type: Number
    },
    location: {
        type: String
    },
    address: {
        type: String
    },
    deliveryInstructions: {
        type: String
    }
});

export default mongoose.model('Partner', PartnerSchema);