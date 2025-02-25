import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
import dotenv from "dotenv";
import { authRoute } from "./modules/auth/auth.route";
import cookieParser from "cookie-parser";
dotenv.config();

//parser
app.use(express.json());
app.use(cookieParser())

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes

app.use("/user", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("MFS SERVER RUNNING");
});

export default app;
