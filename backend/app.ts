import express, { Express, Request, Response, NextFunction } from "express";

import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

import router from "./locations/locations.routes";

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const statusText = error.message || "Something went wrong.";

  res.status(status).json({ status: status, statusText: statusText });
});

app.listen(port);
