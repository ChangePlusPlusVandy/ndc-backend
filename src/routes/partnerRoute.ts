import express, { type Request, type Response } from "express";
import { getPartner, editPartner, createPartner, deletePartner } from "../controllers/partnersControllers";
const partnerRoute = express.Router(); // Creates a new router object


partnerRoute.get("/", (req: Request, res: Response) => {
  getPartner(req, res);
});

partnerRoute.post("/", (req: Request, res: Response) => {
  createPartner(req, res);
});

partnerRoute.put("/", (req: Request, res: Response) => {
  editPartner(req, res);
});

partnerRoute.delete("/", (req: Request, res: Response) => {
  deletePartner(req, res);
});
  
export {partnerRoute};