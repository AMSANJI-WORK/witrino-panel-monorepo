import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@witrino": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@auth": path.resolve(__dirname, "../auth/src"),
      "@edtehadieh": path.resolve(__dirname, "../edtehadieh/src"),
      "@namayande": path.resolve(__dirname, "..//namayande/src"),
    },
  },
});
