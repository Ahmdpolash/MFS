import { getToken } from "./getToken";
import { jwtDecode } from "jwt-decode";

export const getCurrentUser = async () => {
  try {
    const token = await getToken();

    if (!token) {
      return null;
    }

    const decoded = jwtDecode(token);
    console.log(decoded, "token");

    return decoded;
  } catch (error) {
    return error;
  }
};
