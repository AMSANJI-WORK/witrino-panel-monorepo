import { fileURLToPath, URL } from "node:url";
import { getClientConfiguration } from "../../config";
import path from "path";
export default getClientConfiguration({
  test: {
    globals: true,
    environment: "jsdom",
    alias: [{ find: /^vue$/, replacement: "vue/dist/vue.runtime.common.js" }],
  },
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      "@polotik": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@applets": path.resolve(__dirname, "../../applets"),
      "@witrino": path.resolve(__dirname, "../panel-witrino/src"),
    },
  },
});
