import express, { type Request, type Response } from "express";

const {
    getOrder,
    createOrder,
    editOrder, 
    getAnnualOrders
} = require("../controllers/ordersControllers");

const orderRouter = express.Router(); // Creates a new router object


orderRouter.post("/", (req: Request, res: Response) => {
    createOrder(req, res);
});

orderRouter.get("/", (req: Request, res: Response) => {
    getOrder(req, res);
});

orderRouter.put("/", (req: Request, res: Response) => {
    editOrder(req, res);
});

orderRouter.get("/annual", (req: Request, res: Response) => {
    getAnnualOrders(req, res); 
}); 

export { orderRouter };
