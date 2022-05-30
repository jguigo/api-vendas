import "reflect-metadata";
import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { hasConnection } from "src/shared/database";

const app = express();

hasConnection();
app.use(cors());
app.use(express.json());

app.use(routes);

export { app };
