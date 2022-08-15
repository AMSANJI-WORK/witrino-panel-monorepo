import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@witrino": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@admin": path.resolve(__dirname, "../../applets/admin/src"),
      "@auth": path.resolve(__dirname, "../../applets/auth/src"),
      "@edtehadieh": path.resolve(__dirname, "../../applets/edtehadieh/src"),
      "@namayande": path.resolve(__dirname, "../../applets/namayande/src"),
    },
  },
});
