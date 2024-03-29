import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { staffRouter } from "./routes/staffRouter";
import { exampleRoute } from "./routes/exampleRoute";
import { loginRouter } from "./routes/loginRouter";
// import { loginRoute } from "./routes/loginRouter";
import { verifyToken } from "./middlewares/verifyToken";
import { notFound, errorHandler } from "./middlewares/errors";
import { connectDB } from "../config/database";
import { inventoryRouter } from "./routes/inventoryRouter";
import { partnerRoute } from "./routes/partnerRoute";
import { orderRouter } from "./routes/orderRouter";


dotenv.config();

connectDB();

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Allow cross-origin requests (for frontend to communicate with backend on different ports/address)
app.use(express.json()); // Parses incoming JSON requests and uts the parsed data in req
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlenconded payloads
// error handling and better logging
app.use(morgan("dev"));
app.use(helmet());

/**
 * Uses the verifyToken middleware to protect the "/data" route
 * Use the verifyToken to protect all the routes that require authentication
 */
app.use("/example", verifyToken, exampleRoute);
app.use("/staff", verifyToken, staffRouter);

app.use("/partner", verifyToken, partnerRoute);
app.use("/inventory", verifyToken, inventoryRouter);
app.use("/order", verifyToken, orderRouter);

app.use("/login", loginRouter)

// Default route: Unprotected
app.get("/", (_req: Request, res: Response) => {
  res.send("Express + Typescript Auth Server Temp!");
});

// error handling route
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


