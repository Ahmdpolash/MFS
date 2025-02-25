import { errorHandler } from "../../utils/errorHandler";
import { ILogin, IUser } from "./auth.interface";
import User from "./auth.model";
import bcrypt from "bcrypt";

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

  const hashedPassword = bcrypt.hashSync(payload.password, 10);
  const result = await User.create({ ...payload, password: hashedPassword });

  return result;
};

const loginUserIntoDB = async (payload: ILogin) => {
  const { email, number, password } = payload;

  let user;
  if (email) {
    user = await User.findOne({ email });
  } else if (number) {
    user = await User.findOne({ number });
  }

  if (!user) {
    throw new Error("Wrong credentials");
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    throw new Error("Wrong credentials");
  }

  return user;
};

const getUsers = async () => {
  const result = await User.find();
  return result;
};

export const authServices = { createUser, getUsers, loginUserIntoDB };
