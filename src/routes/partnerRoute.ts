import express, { type Request, type Response } from "express";
const partnerRoute = express.Router(); // Creates a new router object

partnerRoute.get("/", (req: Request, res: Response) => {
    res.send(
      ' "93% of people don\'t check facts they read on the internet" - Abraham Lincoln',
    );
  });
  
  export { partnerRoute };