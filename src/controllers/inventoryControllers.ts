import express, { Request, Response } from "express";
const { ObjectId } = require("mongoose").Types;
const Inventory = require("../models/Inventory");

const getInventory = async (req: Request, res: Response) => {
    try {
        const data = await Inventory.find({});

        return res.status(200).json(data[0]);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const setInventory = async (req: Request, res: Response) => {
    try {
        const inventoryId = ObjectId(req.body.id);

        if (inventoryId) {
            const inventory = await Inventory.updateOne(
                { id: inventoryId },
                req.body
            );
            return res.status(200).json(inventory);
        } else {
            return res.status(400).send({ message: "Missing Inventory ID" });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getInventory,
    setInventory,
};
