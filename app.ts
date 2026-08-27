import express from "express";
import { baseURL, config } from "./constants/core.js";

import tourRouter from "./routes/Product.js";

const app = express();

// general middleware
app.use(express.json());

// routing middleware
app.use(`/${baseURL}`, tourRouter);

export default app;
