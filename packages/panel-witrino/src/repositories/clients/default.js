import { create as createClient } from "axios";

import { Config } from "@witrino/constants/config";
import ResponseErrorHandler from "@witrino/middlewares/errorHandler";
const axiosInstance = createClient({
  baseURL: `${Config.baseURL}`,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => ResponseErrorHandler(error)
);

export default axiosInstance;
