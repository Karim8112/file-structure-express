import express from "express";
import { Team } from "../../models/Team.js";
async function PostTeam(
  req: express.Request<typeof Team>,
  res: express.Response,
) {
  try {
    await Team.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
}

// تشغيل الخادم والبدء في مراقبة المنفذ لتلقي طلبات العميل

export default PostTeam;

// ------------------------------------------------------------------
