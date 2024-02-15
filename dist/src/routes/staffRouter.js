"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRouter = void 0;
const express_1 = __importDefault(require("express"));
const staffControllers_1 = require("../controllers/staffControllers");
const staffRouter = express_1.default.Router(); // Creates a new router object
exports.staffRouter = staffRouter;
staffRouter.get("/", staffControllers_1.getStaff);
staffRouter.put("/", staffControllers_1.editStaff);
staffRouter.post("/", staffControllers_1.createStaff);
staffRouter.delete("/", staffControllers_1.deleteStaff);
//# sourceMappingURL=staffRouter.js.map