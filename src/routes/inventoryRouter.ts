import express, { type Request, type Response } from "express";

const {
    getInventory,
    setInventory,
} = require("../controllers/inventoryControllers");

const inventoryRouter = express.Router();

//Declare routes below
inventoryRouter.get("/", getInventory);
inventoryRouter.put("/", setInventory);

export { inventoryRouter };
