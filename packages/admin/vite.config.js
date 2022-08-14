import path from "path";
import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@admin": fileURLToPath(new URL("./src", import.meta.url)),
      "@auth": path.resolve(__dirname, "../auth/src"),
      "@edtehadieh": path.resolve(__dirname, "../edtehadieh/src"),
      "@namayande": path.resolve(__dirname, "../namayande/src"),
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@witrino": path.resolve(__dirname, "../panel-witrino/src"),
    },
  },
});
