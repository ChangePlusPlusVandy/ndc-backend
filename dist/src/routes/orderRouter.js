"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const { getOrder, createOrder, editOrder } = require("../controllers/ordersControllers");
const orderRouter = express_1.default.Router(); // Creates a new router object
exports.orderRouter = orderRouter;
orderRouter.post("/", (req, res) => {
    createOrder(req, res);
});
orderRouter.get("/", (req, res) => {
    getOrder(req, res);
});
orderRouter.put("/", (req, res) => {
    editOrder(req, res);
});
//# sourceMappingURL=orderRouter.js.map