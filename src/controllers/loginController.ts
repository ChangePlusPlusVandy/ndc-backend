import { ObjectId } from "mongodb";
const Partner = require("../models/Partner");
const Staff = require("../models/Staff");


import { type Request, type Response } from "express";


const checkStatus = async (req: Request, res: Response) => {
    try {
        const firebaseUid = req.query?.firebaseUid?.toString();
        if (!firebaseUid)
            return res.status(400).send({ message: "firebaseUid not found in request" });

        let staff = await checkStaff(firebaseUid);
        let partner = await checkPartner(firebaseUid);
        if (staff && !partner)
            return res.status(200).send({ data: staff, isStaff: true });
        if (partner && !staff)
            return res.status(200).send({ data: partner, isStaff: false });

        return res.status(400).send({ error: "User not found" });
    } catch (err: any) {
        console.error(err.message);
        return res.status(400).send({ error: err.message });
    }
};
const checkStaff = async (firebaseUid: string) => {
    try {
        let staff = await Staff.findOne({ firebaseUid: firebaseUid });

        if (staff)
            return staff;
        else
            return null;
    } catch (err: any) {
        console.error(err.message);
        return null;
    }
};

const checkPartner = async (firebaseUid: string) => {
    try {
        let partner = await Partner.findOne({ firebaseUid: firebaseUid });
        if (partner)
            return partner;
        else
            return null;
    } catch (err: any) {
        console.error(err.message);
        return null;
    }
};


export { checkStatus };
