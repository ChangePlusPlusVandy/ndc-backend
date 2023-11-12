import express from "express";

import { getStaff, editStaff, createStaff, deleteStaff } from "../controllers/staffControllers";


const staffRouter= express.Router(); // Creates a new router object


staffRouter.get("/", getStaff);
staffRouter.put("/", editStaff);
staffRouter.post("/", createStaff);
staffRouter.delete("/", deleteStaff);

export { staffRouter };
