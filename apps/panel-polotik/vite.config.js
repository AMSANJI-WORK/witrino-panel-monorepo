
import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "../../packages"),
      "@polotik": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@packages/polotik": path.resolve(__dirname, "../../packages/polotik"),
    },
  },
});
