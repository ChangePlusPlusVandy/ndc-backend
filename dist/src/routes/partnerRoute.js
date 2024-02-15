"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partnerRoute = void 0;
const express_1 = __importDefault(require("express"));
const partnersControllers_1 = require("../controllers/partnersControllers");
const partnerRoute = express_1.default.Router(); // Creates a new router object
exports.partnerRoute = partnerRoute;
partnerRoute.get("/", (req, res) => {
    (0, partnersControllers_1.getPartner)(req, res);
});
partnerRoute.post("/", (req, res) => {
    (0, partnersControllers_1.createPartner)(req, res);
});
partnerRoute.put("/", (req, res) => {
    (0, partnersControllers_1.editPartner)(req, res);
});
partnerRoute.delete("/", (req, res) => {
    (0, partnersControllers_1.deletePartner)(req, res);
});
//# sourceMappingURL=partnerRoute.js.map