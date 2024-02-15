"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePartner = exports.editPartner = exports.getPartner = exports.createPartner = void 0;
const mongodb_1 = require("mongodb");
const Partner = require("../models/Partner");
const createPartner = async (req, res) => {
    try {
        const { orders, firstName, lastName, type, phoneNumber, email, dateJoined, numOrdersMonth, numOrdersYTD, numOrdersTotal, location, address, deliveryInstructions, } = req.body;
        // if (
        //     !(
        //         orders &&
        //         firstName &&
        //         lastName &&
        //         type &&
        //         phoneNumber &&
        //         email &&
        //         dateJoined &&
        //         numOrdersMonth &&
        //         numOrdersYTD &&
        //         numOrdersTotal &&
        //         location &&
        //         address &&
        //         deliveryInstructions
        //     )
        // ) {
        //     return res.status(400).send({ message: "Missing Required Field" });
        // }
        const databaseId = await Partner.find()
            .sort({ id: -1 })
            .limit(1)
            .then((docs) => {
            return docs[0].get("id");
        })
            .catch((err) => {
            console.log(err);
        });
        const newPartner = new Partner({
            ...req.body,
            objectId: new mongodb_1.ObjectId(databaseId + 1),
        });
        const partner = await newPartner.save();
        return res.status(200).json(partner);
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.createPartner = createPartner;
const getPartner = async (req, res) => {
    try {
        const id = req.query?.id;
        if (id) {
            const partner = await Partner.findById(id);
            return res.status(200).json(partner);
        }
        console.log("No Partner ID Detected");
        const partner = await Partner.find();
        return res.status(200).json(partner);
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.getPartner = getPartner;
const editPartner = async (req, res) => {
    try {
        const id = req.params?.id;
        if (id) {
            const partner = Partner.findByIdAndUpdate(id, req.body)
                .then(() => {
                console.log(partner);
                return res.status(200).json(partner);
            })
                .catch((err) => {
                console.log(err);
                return res.status(400).send({ message: err });
            });
        }
        else {
            return res.status(400).send({ message: "Missing Partner ID" });
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.editPartner = editPartner;
const deletePartner = async (req, res) => {
    try {
        const id = req.query?.id;
        if (id) {
            Partner.findByIdAndDelete(id)
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
            return res.status(400).send({ message: "Missing Partner ID" });
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};
exports.deletePartner = deletePartner;
//# sourceMappingURL=partnersControllers.js.map