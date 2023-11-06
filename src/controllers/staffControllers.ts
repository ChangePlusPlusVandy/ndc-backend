import { ObjectId } from "mongodb";
import Staff from "../models/Staff"
import { type Request, type Response } from "express";

const createStaff = async (req: Request, res: Response) => {
    try {
        const newStaff = req.body as Staff;
        const result = await <database>.insertOne(newStaff);
        return res.status(200).json(newStaff);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({message: err.message});
    }
} 

const getStaff = async (req: Request, res: Response) => {
    try {
        const email = req.body;
        const staff = (await <database>.find(email)) as Staff;
        return res.status(200).send(staff);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({message: err.message});
    }
}

const editStaff = async (req: Request, res: Response) => {
    try {
        const updatedStaff: Staff = req.body as Staff;
        

    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({message: err.message});
    }
}

const deleteStaff = async (req: Request, res: Response) => {
    try {
        const result = await <database>.deleteOne(req.body);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({message: err.message});
    }
}

export { 
    createStaff,
    getStaff,
    editStaff,
    deleteStaff
 };