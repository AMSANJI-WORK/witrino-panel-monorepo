import path from "path";
import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@namayande": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@witrino": path.resolve(__dirname, "../../apps/panel-witrino/src"),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@auth": path.resolve(__dirname, "../auth/src"),
      "@edtehadieh": path.resolve(__dirname, "../edtehadieh/src"),
    },
  },
});
