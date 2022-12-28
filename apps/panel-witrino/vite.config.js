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
      "@witrino": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
