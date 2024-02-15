"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = new Schema({
    id: {
        type: mongodb_1.ObjectId,
    },
    partner: {
        type: mongodb_1.ObjectId,
        ref: "Partner",
        // required: true,
    },
    datePlaced: {
        type: Date,
        default: () => Date.now(),
        required: true,
    },
    dateCompleted: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ["PLACED", "OPEN", "FILLED", "CANCELLED"],
        default: "PLACED",
        required: true,
    },
    numDiapers: {
        type: Number,
        required: true,
    },
    newborn: {
        type: Number,
    },
    size1: {
        type: Number,
    },
    size2: {
        type: Number,
    },
    size3: {
        type: Number,
    },
    size4: {
        type: Number,
    },
    size5: {
        type: Number,
    },
    size6: {
        type: Number,
    },
});
module.exports = mongoose.model("Order", OrderSchema);
//# sourceMappingURL=Order.js.map