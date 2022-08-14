import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";

export default getClientConfiguration({
  resolve: {
    alias: {
      "@auth": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@witrino": path.resolve(__dirname, "../panel-witrino/src"),
      "@edtehadieh": path.resolve(__dirname, "../edtehadieh/src"),
      "@namayande": path.resolve(__dirname, "../namayande/src"),
    },
  },
});
