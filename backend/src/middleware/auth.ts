import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import AppError from "../utils/AppError";
import User from "../modules/auth/auth.model";

type Role = "agent" | "user" | "admin";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //? split the token from the headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: httpStatus.UNAUTHORIZED,
        message: "You have no access to this route",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    req.user = (await User.findById(decoded.id).select(
      "-password"
    )) as JwtPayload;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
    next(error)
  }
};
