import {Request, Response} from 'express'; 
import {Types} from 'mongoose'; 
const Order = require("../models/Order.ts");

interface CreateQuery {
    numDiapers: number; 
}

interface GetQuery {
    orderId?: Types.ObjectId, 
    partnerId?: Types.ObjectId, 
    status?: string;
}

const createOrder = async (req:Request<unknown, unknown, unknown, CreateQuery>, res:Response) => {
    try {
        const { query } = req; 
        if (!query.numDiapers) {
            return res.status(400).send("Invalid Order query"); 
        }
        const newOrder = await Order.create(query.numDiapers); 
        await newOrder.save(); 
        return res.status(200).json(newOrder); 
    } catch (err:any) {
        console.error(err.message); 
        return res.status(500).send({message: err.message}); 
    }
}

const getOrder = async (req:Request<unknown, unknown, unknown, GetQuery>, res:Response) => {
    try {
        const { query } = req; 

        const allOrders = await Order.find({id: query.orderId, partner: query.partnerId, status: query.status}); 
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