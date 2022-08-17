import Cookies from "js-cookie";
import { create as createClient } from "axios";
import { Config } from "@polotik/constants/config";
import ResponseErrorHandler from "@polotik/middlewares/errorHandler";
const token = Cookies.get("token");

const axiosInstance = createClient({
  baseURL: `${Config.baseURL}${Config.version}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ResponseErrorHandler(error)
);
export default axiosInstance;
