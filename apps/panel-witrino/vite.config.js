import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@witrino": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../shared/src"),
      "@applets": path.resolve(__dirname, "../../applets"),
      "@packages/admin": path.resolve(__dirname, "../../packages/admin"),
    },
  },
});
