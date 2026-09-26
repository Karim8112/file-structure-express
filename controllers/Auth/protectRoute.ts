import express from "express";
import jwt from "jsonwebtoken";

async function protectRoute(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  // verify token exist
  try {
    let token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer")) {
      return res.status(401).json({
        status: "failed",
        message: "you are not logged in!!",
      });
    }
    // verify token with JWT secret (i don't hell know where the expire date?)
    token = token.split(" ")[1];
    const decoded = await jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    );
    console.log(decoded);

    // verify if user exists (from its _id)
    // verify it the user didn't change his password later
    next();
  } catch {
    return res.status(500).json({
      status: "failed",
      message: "connection error",
    });
  }
}

export default protectRoute;
