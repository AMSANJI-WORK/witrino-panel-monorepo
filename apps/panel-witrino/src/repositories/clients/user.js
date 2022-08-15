import Cookies from "js-cookie";
import { create as createClient } from "axios";
import { Config } from "@witrino/constants/config";
import ResponseErrorHandler from "@witrino/middlewares/errorHandler";
const token = Cookies.get("access_token");

const axiosInstance = createClient({
  baseURL: `${Config.baseURL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ResponseErrorHandler(error)
);
export default axiosInstance;
