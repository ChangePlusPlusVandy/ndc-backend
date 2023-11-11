import { ObjectId } from "mongodb";
import Staff from "../models/Staff";

import { type Request, type Response } from "express";

const createStaff = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, phoneNumber, email, dateJoined } =
            req.body;

        if (!(firstName && lastName && phoneNumber && email && dateJoined)) {
            return res.status(400).send({ message: "Missing Required Field" });
        }

        const databaseId = await Staff.find()
            .sort({ id: -1 })
            .limit(1)
            .then((docs: any) => {
                return docs[0].get("id");
            })
            .catch((err: any) => {
                console.log(err);
            });

        const newStaff = new Staff({
            ...req.body,
            objectId: new ObjectId(databaseId + 1),
        });
        const staff = await newStaff.save();

        return res.status(200).json(staff);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const getStaff = async (req: Request, res: Response) => {
    try {
        const id = req.query?.id;
        if (id) {
            const staff = await Staff.findById(id);
            return res.status(200).json(staff);
        }
        console.log("No Staff ID Detected");

        const staff = await Staff.find();
        return res.status(200).json(staff);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const editStaff = async (req: Request, res: Response) => {
    try {
        const id = req.params?.id;
        if (id) {
            const staff = Staff.findByIdAndUpdate(id, req.body)
                .then(() => {
                    console.log(staff);
                    return res.status(200).json(staff);
                })
                .catch((err: any) => {
                    console.log(err);
                    return res.status(400).send({ message: err });
                });
        } else {
            return res.status(400).send({ message: "Missing Staff ID" });
        }
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const deleteStaff = async (req: Request, res: Response) => {
    try {
        const id = req.query?.id;
        if (id) {
            Staff.findByIdAndDelete(id)
                .then(() => {
                    return res
                        .status(200)
                        .json({ message: "Successfully deleted." });
                })
                .catch((err: any) => {
                    return res.status(400).send({ message: err });
                });
        } else {
            return res.status(400).send({ message: "Missing Staff ID" });
        }
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

export { createStaff, getStaff, editStaff, deleteStaff };
