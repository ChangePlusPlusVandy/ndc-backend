import { createOrder, getOrder } from "../controllers/orders.controllers.ts";

const orderRoute = express.Router();

orderRoute.get("/", (req: Request, res: Response) => {
  getOrder(req, res);
});

orderRoute.post("/", (req: Request, res: Response) => {
  createOrder(req, res);
});

export {orderRoute};

