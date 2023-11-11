const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventorySchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    wrapped: {
        type: Object,
        newborn: {
            type: Number,
            default: 0,
            required: true,
        },
        size1: {
            type: Number,
            default: 0,
            required: true,
        },
        size2: {
            type: Number,
            default: 0,
            required: true,
        },
        size3: {
            type: Number,
            default: 0,
            required: true,
        },
        size4: {
            type: Number,
            default: 0,
            required: true,
        },
        size5: {
            type: Number,
            default: 0,
            required: true,
        },
        size6: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    unwrapped: {
        type: Object,
        newborn: {
            type: Number,
            default: 0,
            required: true,
        },
        size1: {
            type: Number,
            default: 0,
            required: true,
        },
        size2: {
            type: Number,
            default: 0,
            required: true,
        },
        size3: {
            type: Number,
            default: 0,
            required: true,
        },
        size4: {
            type: Number,
            default: 0,
            required: true,
        },
        size5: {
            type: Number,
            default: 0,
            required: true,
        },
        size6: {
            type: Number,
            default: 0,
            required: true,
        },
    },
});

module.exports = mongoose.model(
    "Inventory",
    InventorySchema,
);