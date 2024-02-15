"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const staffRouter_1 = require("./routes/staffRouter");
const exampleRoute_1 = require("./routes/exampleRoute");
const loginRouter_1 = require("./routes/loginRouter");
// import { loginRoute } from "./routes/loginRouter";
const verifyToken_1 = require("./middlewares/verifyToken");
const errors_1 = require("./middlewares/errors");
const database_1 = require("../config/database");
const inventoryRouter_1 = require("./routes/inventoryRouter");
const partnerRoute_1 = require("./routes/partnerRoute");
const orderRouter_1 = require("./routes/orderRouter");
dotenv_1.default.config();
(0, database_1.connectDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)()); // Allow cross-origin requests (for frontend to communicate with backend on different ports/address)
app.use(express_1.default.json()); // Parses incoming JSON requests and uts the parsed data in req
app.use(express_1.default.urlencoded({ extended: true })); // Parses incoming requests with urlenconded payloads
// error handling and better logging
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
/**
 * Uses the verifyToken middleware to protect the "/data" route
 * Use the verifyToken to protect all the routes that require authentication
 */
app.use("/example", verifyToken_1.verifyToken, exampleRoute_1.exampleRoute);
app.use("/staff", verifyToken_1.verifyToken, staffRouter_1.staffRouter);
app.use("/partner", verifyToken_1.verifyToken, partnerRoute_1.partnerRoute);
app.use("/inventory", verifyToken_1.verifyToken, inventoryRouter_1.inventoryRouter);
app.use("/order", verifyToken_1.verifyToken, orderRouter_1.orderRouter);
app.use("/login", loginRouter_1.loginRouter);
// Default route: Unprotected
app.get("/", (_req, res) => {
    res.send("Express + Typescript Auth Server Temp!");
});
// error handling route
app.use(errors_1.notFound);
app.use(errors_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map