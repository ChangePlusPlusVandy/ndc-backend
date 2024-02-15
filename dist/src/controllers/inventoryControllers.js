"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ObjectId } = require("mongoose").Types;
const Inventory = require("../models/Inventory");
const getInventory = async (req, res) => {
    try {
        const data = await Inventory.find({});
        return res.status(200).json(data[0]);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const setInventory = async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);
        if (_id) {
            const inventory = await Inventory.findByIdAndUpdate(_id, req.body);
            return res.status(200).json(inventory);
        }
        else {
            return res.status(401).send({ message: "Missing Inventory ID" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getInventory,
    setInventory,
};
//# sourceMappingURL=inventoryControllers.js.map