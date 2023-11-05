import express, { Request, Response } from "express";
// const { ObjectId } = require("mongoose").Types; 

const getInventory = (req: Request, res: Response) => {
    res.status(200).send("Get Inventory");
}

const setInventory = (req: Request, res: Response) => {
    res.status(200).send("Edit Inventory");
}

module.exports = { 
    getInventory,
    setInventory,
};