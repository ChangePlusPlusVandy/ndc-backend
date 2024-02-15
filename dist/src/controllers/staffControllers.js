"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStaff = exports.editStaff = exports.getStaff = exports.createStaff = void 0;
const Staff = require("../models/Staff");
const createStaff = async (req, res) => {
    try {
        const { id, firstName, lastName, phoneNumber, email, dateJoined } = req.body;
        const newStaff = new Staff({ ...req.body });
        await newStaff.save();
        return res.status(200).json(newStaff);
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.createStaff = createStaff;
const getStaff = async (req, res) => {
    try {
        const id = req.query?.id;
        if (id) {
            const staff = await Staff.findById(id).exec();
            return res.status(200).json(staff);
        }
        console.log("No Staff ID Found");
        // gets all staff
        const staff = await Staff.find();
        return res.status(200).json(staff);
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.getStaff = getStaff;
const editStaff = async (req, res) => {
    try {
        const id = req.params?.id;
        if (id) {
            const staff = Staff.findByIdAndUpdate(id, req.body)
                .then(() => {
                console.log(staff);
                return res.status(200).json(staff);
            })
                .catch((err) => {
                console.log(err);
                return res.status(400).send({ message: err });
            });
        }
        else {
            return res.status(400).send({ message: "Missing Staff ID" });
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.editStaff = editStaff;
const deleteStaff = async (req, res) => {
    try {
        const id = req.query?.id;
        if (id) {
            Staff.findByIdAndDelete(id)
                .then(() => {
                return res
                    .status(200)
                    .json({ message: "Successfully deleted." });
            })
                .catch((err) => {
                return res.status(400).send({ message: err });
            });
        }
        else {
            return res.status(400).send({ message: "Missing Staff ID" });
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.deleteStaff = deleteStaff;
//# sourceMappingURL=staffControllers.js.map