import axios from "axios";
import { getToken } from "./getToken";

// const api = "https://mfs-bw2atetkh-polashs-projects.vercel.app";
const api = "http://localhost:5000";

const ax = axios.create({
  baseURL: `${api}`,
  withCredentials: true,
  
});

ax.interceptors.request.use(async (api) => {
  const token = await getToken();

  if (token) {
    api.headers.Authorization = `Bearer ${token}`;
  }
  return api;
});

ax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default ax;
