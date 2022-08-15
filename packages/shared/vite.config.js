import path from "path";
import { getClientConfiguration } from "../../config";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL("./src", import.meta.url)),
      "@witrino": path.resolve(__dirname, "../../apps/panel-witrino/src"),
      "@auth": path.resolve(__dirname, "../../applets/auth/src"),
      "@admin": path.resolve(__dirname, "../../applets/admin/src"),
      "@namayande": path.resolve(__dirname, "../../applets/namayande/src"),
      "@edtehadieh": path.resolve(__dirname, "../../applets/edtehadieh/src"),
    },
  },
});
