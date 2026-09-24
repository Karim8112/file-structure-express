import express from "express";
import { Project } from "../../models/Project.js";
async function PostProject(
  req: express.Request<typeof Project>,
  res: express.Response,
) {
  try {
    const success = await Project.create(req.body);
    if (success) {
      res.status(201).json({
        status: "success",
        data: {
          project: req.body,
        },
      });
    } else {
      res.status(400).json({
        status: "failed",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
}

// تشغيل الخادم والبدء في مراقبة المنفذ لتلقي طلبات العميل

export default PostProject;

// ------------------------------------------------------------------
