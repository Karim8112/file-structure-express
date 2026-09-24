import express from "express";
import { baseURL } from "./constants/core.js";

// middlewares
import AddTimeMiddleware from "./middlewares/addTime.js";

// routes
// import tourRouter from "./routes/Tour.js";
import TeamRouter from "./routes/Team.js";
import ProjectRouter from "./routes/Project.js";

const app = express();

//-------- general middleware -------------
// npm middlewares
app.use(express.json());
app.use(express.static("static"));

// custom middlewares
app.use(AddTimeMiddleware);
// -------- routing middleware -------------
// app.use(`/${baseURL}`, tourRouter);
app.use(`/${baseURL}`, TeamRouter);
app.use(`/${baseURL}`, ProjectRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the API",
  });
});

export default app;
