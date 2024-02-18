import { Request, Response } from 'express';
const { ObjectId } = require("mongoose").Types;
const Order = require("../models/Order");

const createOrder = async (req: Request, res: Response) => {
    try {

        const { numDiapers } = req.body;
        if (!numDiapers) {
            return res.status(400).send("Invalid Order query");
        }

        const newOrder = new Order({ ...req.body });
        await newOrder.save();

        console.log(newOrder);
        return res.status(200).json(newOrder);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const getOrder = async (req: Request, res: Response) => {
    try {
        const { orderId, partnerId, status } = req.query;

        let allOrders = null;
        if (orderId) {
            allOrders = await Order.findById(orderId);
        } else if (orderId && status) {
            allOrders = await Order.findByIdAndUpdate(orderId, { partner: partnerId, status: status });
        } else if (partnerId) {
            allOrders = await Order.find({ partner: partnerId });
        } else if (status) {
            allOrders = await Order.find({ status: status });
        } else {
            allOrders = await Order.find({}).populate("partner", "firstName lastName"); 
        }

        return res.status(200).json(allOrders);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}
const editOrder = async (req: Request, res: Response) => {
    try {
        const { status, numDiapers, newborn, size1, size2, size3, size4, size5, size6 } = req.body;
        const { orderId } = req.body.orderId;

        if (newborn + size1 + size2 + size3 + size4 + size5 + size6 !== numDiapers)
            return res.status(400).send("Invalid. Sum of diaper sizes doesn't match numDiapers");
        if (!orderId)
            return res.status(400).send("OrderId missing");


        const order = await Order.findByIdAndUpdate(
            orderId,
            req.body
        );
        return res.status(200).json(order);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).send({ message: err.message });
    }
}

const getAnnualOrders = async (req: Request, res: Response) => {
    console.log("got here at least");
    try {
        const orders = await Order.find({status: "FILLED"}); 
        
        const ordersByMonth: number[] = new Array(12)
        for (let i:number = 0; i < 12; i++) {
            ordersByMonth[i] = 0; 
        }

        const currYear = new Date().getFullYear(); 
        
        orders.forEach((order: typeof Order) => {
            if (order.dateCompleted.getFullYear() == currYear) {
                const orderMonth = order.dateCompleted.getMonth(); 
                ordersByMonth[orderMonth] += order.numDiapers;
            }
        })

        return res.status(200).json(ordersByMonth); 
    } catch (err: any) {
        console.error(err.message); 
        return res.status(500).send({ message: err.message }); 
    }   
}

module.exports = {
    createOrder,
    getOrder,
    editOrder,
    getAnnualOrders
};
