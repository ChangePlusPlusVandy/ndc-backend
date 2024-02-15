"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPartner = exports.checkStatus = void 0;
const Partner = require("../models/Partner");
const Staff = require("../models/Staff");
const checkStatus = async (req, res) => {
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
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ error: err.message });
    }
};
exports.checkStatus = checkStatus;
const checkStaff = async (firebaseUid) => {
    try {
        let staff = await Staff.findOne({ firebaseUid: firebaseUid });
        if (staff)
            return staff;
        else
            return null;
    }
    catch (err) {
        console.error(err.message);
        return null;
    }
};
const checkPartner = async (firebaseUid) => {
    try {
        let partner = await Partner.findOne({ firebaseUid: firebaseUid });
        if (partner)
            return partner;
        else
            return null;
    }
    catch (err) {
        console.error(err.message);
        return null;
    }
};
const createPartner = async (req, res) => {
    try {
        const newPartner = new Partner({ ...req.body });
        console.log(newPartner);
        await newPartner.save();
        return res.status(200).json(newPartner);
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.createPartner = createPartner;
//# sourceMappingURL=loginController.js.map