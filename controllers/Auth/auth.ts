import jwt, { type SignOptions } from "jsonwebtoken";
import { User } from "../../models/User.js";
import express from "express";

async function login(req: express.Request<typeof User>, res: express.Response) {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({
      status: "failed",
      message: "missing user name or password",
    });
  }

  try {
    const found_user = await User.findOne({ userName });
    if (!found_user || found_user.password != password) {
      return res.status(400).json({
        status: "failed",
        message: "user name or password is invalid",
      });
    } else {
      const expiresIn = process.env.JWT_EXPIRES_IN;
      const signOptions: SignOptions | {} = expiresIn ? { expiresIn } : {};
      const token = jwt.sign(
        { id: found_user._id },
        process.env.JWT_SECRET as string,
        signOptions,
      );
      return res.status(200).json({
        status: "success",
        token,
      });
    }
  } catch {
    return res.status(400).json({
      status: "filed",
      message: "connection error",
    });
  }
}

// تشغيل الخادم والبدء في مراقبة المنفذ لتلقي طلبات العميل

export default login;
