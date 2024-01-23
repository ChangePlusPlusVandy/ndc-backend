import express, { type Request, type Response } from "express";
const loginRouter = express.Router(); // Creates a new router object

import { checkStatus, createPartner } from "../controllers/loginController";


loginRouter.get("/", checkStatus);
loginRouter.post("/create-partner", createPartner);

export { loginRouter };
