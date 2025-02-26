import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";

type Role = "agent" | "user" | "admin";


export const auth = (...requiredRoles: Role[]) => {

  catchAsync((req: Request, res: Response, next: NextFunction) => {
    //? split the token from the headers
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);

    if (!token)
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: httpStatus.UNAUTHORIZED,
        message: "You have no access to this route",
      });

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (requiredRoles && !requiredRoles.includes(decoded.role)) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: httpStatus.UNAUTHORIZED,
        message: "You have no access to this route",
      });
      }
    
    // console.log(decoded);

    req.user = decoded;
    next();
  });
};
