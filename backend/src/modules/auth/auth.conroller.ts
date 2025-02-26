import { Request, Response } from "express";
import { authServices } from "./auth.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.createUser(req.body);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "something went wrong",
      error: error,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.loginUserIntoDB(req.body);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: process.env.mode === "production",
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1yr
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "something went wrong",
      error: error,
    });
  }
};

export const signout = (req: Request, res: Response) => {
  res.clearCookie("token").status(200).json("Signout success!");
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.getUsers();

    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "something went wrong",
      error: error,
    });
  }
};

export const authController = { createUser, getUser, loginUser,signout };
