import express, { Request, Response } from "express";
// const { ObjectId } = require("mongoose").Types; 
const Inventory = require("../models/Inventory.js");

const getInventory = async (req: Request, res: Response) => {
    try {
        const data = await Inventory.find();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

const setInventory = (req: Request, res: Response) => {
    
}

module.exports = { 
    getInventory,
    setInventory,
};