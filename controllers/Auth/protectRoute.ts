import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import { decode } from "node:punycode";

async function protectRoute(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  // 1) verify token exist
  try {
    let token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer")) {
      return res.status(401).json({
        status: "failed",
        message: "you are not logged in!!",
      });
    }
    // 2) verify token with JWT secret (i don't hell know where the expire date?)
    token = token.split(" ")[1];
    try {
      const decoded = await jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
      );
      if (typeof decoded === "string" || !("id" in decoded)) {
        return res.status(401).json({
          status: "failed",
          message: "invalid token",
        });
      }
      console.log(decoded.id);
      // verify if user exists (from its _id)
      User.findOne({ name: "Bassel Al-Zaher" }).then((data) => {
        console.log(data);
      });

      // verify it the user didn't change his password later
      next();
    } catch {
      return res.status(401).json({
        status: "failed",
        message: "invalid token",
      });
    }
  } catch {
    return res.status(401).json({
      status: "failed",
      message: "connection error",
    });
  }
}

export default protectRoute;
