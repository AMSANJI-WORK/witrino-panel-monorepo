import Cookies from "js-cookie";
import { create as createClient } from "axios";
import { ConfigMock } from "@polotik/constants/config";
import ResponseErrorHandler from "@polotik/middlewares/errorHandler";
const token = Cookies.get("token");

const axiosInstance = createClient({
  baseURL: `${ConfigMock.baseURL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ResponseErrorHandler(error)
);
export default axiosInstance;
