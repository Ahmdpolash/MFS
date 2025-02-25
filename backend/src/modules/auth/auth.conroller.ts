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
    const { email, number, password } = req.body;

    // // Check if either email or number is provided
    // if (!email && !number) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Email or phone number is required",
    //   });
    // }
    
    const result = await authServices.loginUserIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "User login successfully",
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

export const authController = { createUser, getUser, loginUser };
