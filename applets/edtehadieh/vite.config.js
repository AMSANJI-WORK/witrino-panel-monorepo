import path from "path";
import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@edtehadieh": fileURLToPath(new URL("./src", import.meta.url)),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@auth": path.resolve(__dirname, "../auth/src"),
      "@namayande": path.resolve(__dirname, "../namayande/src"),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@witrino": path.resolve(__dirname, "../../apps/panel-witrino/src"),
    },
  },
});
