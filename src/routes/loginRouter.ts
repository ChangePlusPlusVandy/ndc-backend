import express, { type Request, type Response } from "express";
const loginRouter = express.Router(); // Creates a new router object

import { checkStatus } from "../controllers/loginController";


loginRouter.get("/", checkStatus);

export { loginRouter };
