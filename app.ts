import express from "express";
import { baseURL } from "./constants/core.js";
// middlewares
import AddTimeMiddleware from "./middlewares/addTime.js";

// routes
import tourRouter from "./routes/Product.js";

const app = express();

//-------- general middleware -------------
// npm middlewares
app.use(express.json());
app.use(express.static("static"));

// custom middlewares
app.use(AddTimeMiddleware);
// -------- routing middleware -------------
app.use(`/${baseURL}`, tourRouter);

export default app;
