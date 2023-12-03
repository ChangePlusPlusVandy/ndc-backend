import { ObjectId } from "mongodb";
const Partner = require("../models/Partner.ts");

import { type Request, type Response } from "express";

const createPartner = async (req: Request, res: Response) => {
    try {
        const {
            orders,
            firstName,
            lastName,
            type,
            phoneNumber,
            email,
            dateJoined,
            numOrdersMonth,
            numOrdersYTD,
            numOrdersTotal,
            location,
            address,
            deliveryInstructions,
        } = req.body;

        if (
            !(
                orders &&
                firstName &&
                lastName &&
                type &&
                phoneNumber &&
                email &&
                dateJoined &&
                numOrdersMonth &&
                numOrdersYTD &&
                numOrdersTotal &&
                location &&
                address &&
                deliveryInstructions
            )
        ) {
            return res.status(400).send({ message: "Missing Required Field" });
        }

        const databaseId = await Partner.find()
            .sort({ id: -1 })
            .limit(1)
            .then((docs: any) => {
                return docs[0].get("id");
            })
            .catch((err: any) => {
                console.log(err);
            });

        const newPartner = new Partner({
            ...req.body,
            objectId: new ObjectId(databaseId + 1),
        });
        const partner = await newPartner.save();

        return res.status(200).json(partner);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const getPartner = async (req: Request, res: Response) => {
    try {
        const id = req.query?.id;
        if (id) {
            const partner = await Partner.findById(id);
            return res.status(200).json(partner);
        }
        console.log("No Partner ID Detected");

        const partner = await Partner.find();
        return res.status(200).json(partner);
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const editPartner = async (req: Request, res: Response) => {
    try {
        const id = req.params?.id;
        if (id) {
            const partner = Partner.findByIdAndUpdate(id, req.body)
                .then(() => {
                    console.log(partner);
                    return res.status(200).json(partner);
                })
                .catch((err: any) => {
                    console.log(err);
                    return res.status(400).send({ message: err });
                });
        } else {
            return res.status(400).send({ message: "Missing Partner ID" });
        }
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

const deletePartner = async (req: Request, res: Response) => {
    try {
        const id = req.query?.id;
        if (id) {
            Partner.findByIdAndDelete(id)
                .then(() => {
                    return res
                        .status(200)
                        .json({ message: "Successfully deleted." });
                })
                .catch((err: any) => {
                    return res.status(400).send({ message: err });
                });
        } else {
            return res.status(400).send({ message: "Missing Partner ID" });
        }
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

export { createPartner, getPartner, editPartner, deletePartner };
