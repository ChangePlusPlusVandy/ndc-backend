import {Request, Response} from 'express'; 
const Order = require("../models/Order.ts");

const createOrder = async (req:Request, res:Response) => {
    try {
        const { numDiapers } = req.body; 
        if (!numDiapers) {
            return res.status(400).send("Invalid Order query"); 
        }
        const newOrder = await Order.create(numDiapers); 
        await newOrder.save(); 
        return res.status(200).json(newOrder); 
    } catch (err:any) {
        console.error(err.message); 
        return res.status(500).send({message: err.message}); 
    }
}

const getOrder = async (req:Request, res:Response) => {
    try {
        const { orderId, partnerId, status } = req.body;
        
        let allOrders = null; 
        if (orderId) {
            allOrders = await Order.find({id: orderId}); 
        } else if (partnerId && status) {
            allOrders = await Order.find({partner: partnerId, status: status});
        } else if (partnerId) {
            allOrders = await Order.find({partner: partnerId}); 
        } else if (status) {
            allOrders = await Order.find({status: status}); 
        } else {
            return res.status(400).send("Invalid search query"); 
        }

        return res.status(200).json(allOrders); 
    } catch (err:any) {
        console.error(err.message); 
        return res.status(500).send({message: err.message}); 
    }
}

module.exports = {
    createOrder, 
    getOrder,
};