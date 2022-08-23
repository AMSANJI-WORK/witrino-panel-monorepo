import { getClientConfiguration } from "../../../config";
import path from "path";
export default getClientConfiguration({
  test: {
    globals: true,
    environment: "jsdom",
    alias: [{ find: /^vue$/, replacement: "vue/dist/vue.runtime.common.js" }],
  },
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "../../../packages"),
      "@polotik": path.resolve(__dirname, "../../../apps/panel-polotik/src"),
      "@shared": path.resolve(__dirname, "../../../packages/shared/src"),
      "@packages/polotik": path.resolve(__dirname, "../../../packages/polotik"),
    },
  },
});
