import { create as createClient } from "axios";

import { Config } from "@polotik/constants/config";
import ResponseErrorHandler from "@polotik/middlewares/errorHandler";
const axiosInstance = createClient({
  baseURL: `${Config.baseURL}${Config.version}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ResponseErrorHandler(error)
);

export default axiosInstance;
