import jwt, { type SignOptions } from "jsonwebtoken";
import { User } from "../../models/User.js";
import express from "express";

async function login(req: express.Request<typeof User>, res: express.Response) {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({
        status: "failed",
        message: "missing user name or password",
      });
    }
    const found_user = await User.findOne({ userName: userName });
    console.log(typeof found_user?.password, found_user?.password);
    console.log(typeof userName, userName);

    if (!found_user || found_user.password != password) {
      res.status(400).json({
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
      res.status(200).json({
        status: "success",
        token,
      });
    }
  } catch {
    res.status(400).json({
      status: "filed",
      message: "connection error",
    });
  }
}

// تشغيل الخادم والبدء في مراقبة المنفذ لتلقي طلبات العميل

export default login;
