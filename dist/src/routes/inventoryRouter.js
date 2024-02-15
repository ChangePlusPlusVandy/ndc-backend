"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const { getInventory, setInventory, } = require("../controllers/inventoryControllers");
const inventoryRouter = express_1.default.Router();
exports.inventoryRouter = inventoryRouter;
//Declare routes below
inventoryRouter.get("/", getInventory);
inventoryRouter.put("/", setInventory);
//# sourceMappingURL=inventoryRouter.js.map