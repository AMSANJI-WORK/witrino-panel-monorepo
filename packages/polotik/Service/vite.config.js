import { getClientConfiguration } from "../../../config";
import path from "path";
export default getClientConfiguration({
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "../../../packages"),
      "@polotik": path.resolve(__dirname, "../../../apps/panel-polotik/src"),
      "@shared": path.resolve(__dirname, "../../../packages/shared/src"),
      "@packages/polotik": path.resolve(__dirname, "../../../packages/polotik"),
    },
  },
});
