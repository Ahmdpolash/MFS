import { errorHandler } from "../../utils/errorHandler";
import { ILogin, IUser } from "./auth.interface";
import User from "./auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createUser = async (payload: IUser) => {
  // check if user is already exist

  const isUserAlreadyExists = await User.findOne({
    $or: [
      { email: payload.email },
      { nid: payload.nid },
      { number: payload.number },
    ],
  });

  if (isUserAlreadyExists) {
    throw new Error("user already exists");
  }

  // hashed pass
  const hashedPassword = bcrypt.hashSync(payload.password, 10);
  const result = await User.create({ ...payload, password: hashedPassword });

  return result;
};

// login user

const loginUserIntoDB = async (payload: ILogin) => {
  const { identifier, password } = payload;

  let user;
  if (identifier.includes("@")) {
    user = await User.findOne({ email: identifier }).select("+password");
  } else {
    user = await User.findOne({ number: identifier }).select("+password");
  }

  if (!user) {
    throw new Error("Wrong credentials");
  }

  // compare password
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    throw new Error("Wrong credentials");
  }

  // jwt token
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      number: user.number,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  const result = await User.findById(user._id);

  return { token, result };
};

// get all users
const getUsers = async () => {
  const result = await User.find();
  return result;
};

export const authServices = { createUser, getUsers, loginUserIntoDB };
