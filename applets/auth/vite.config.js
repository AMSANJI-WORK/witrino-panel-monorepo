import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";

export default getClientConfiguration({
  resolve: {
    alias: {
      "@auth": fileURLToPath(new URL("./src", import.meta.url)),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@namayande": path.resolve(__dirname, "../namayande/src"),
      "@edtehadieh": path.resolve(__dirname, "../edtehadieh/src"),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@witrino": path.resolve(__dirname, "../../apps/panel-witrino/src"),
    },
  },
});
