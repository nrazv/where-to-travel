import axios from "axios";
import { getStoredToken } from "../hooks/localstorage/storage";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = getStoredToken();
  req.headers["Content-Type"] = "application/json";

  if (token !== null) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  return req;
});

export default axiosInstance;
