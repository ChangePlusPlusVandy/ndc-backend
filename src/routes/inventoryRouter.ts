import express, { type Request, type Response } from "express";

const { 
    getInventory,
    setInventory,
} = require("../controllers/inventoryControllers.ts");

const router = express.Router(); 

//Declare routes below
router.get("/", getInventory);
router.put("/", setInventory);

module.exports = router;
