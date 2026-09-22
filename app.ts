import express from "express";
import { baseURL } from "./constants/core.js";
import axios from "axios";
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

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API",
  });
});

export default app;
