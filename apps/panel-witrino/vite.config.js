import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@applets": path.resolve(__dirname, "../../applets"),
      "@packages": path.resolve(__dirname, "../../packages"),
      "@witrino": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@packages/admin": path.resolve(__dirname, "../../packages/admin"),
      "@commen": path.resolve(__dirname, "../../commen"),
    },
  },
});
