import express, { Request, Response } from "express";
const { ObjectId } = require("mongoose").Types; 
const Inventory = require("../models/Inventory.js");

const getInventory = async (req: Request, res: Response) => {
    try {
        const data = await Inventory.find();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

const setInventory = async (req: Request, res: Response) => {
    try {
        const inventoryId = ObjectId(req.body.id);

        if (inventoryId) {
            const inventory = await Inventory.updateOne(
                {id: inventoryId},
                req.body
            );
            res.status(200).json(inventory); 
        } else {
            res.status(400).send({ message: "Missing Inventory ID" });
        }
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

module.exports = { 
    getInventory,
    setInventory,
};