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
      "@packages": path.resolve(__dirname, "../../packages"),
      "@polotik": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@packages/polotik": path.resolve(__dirname, "../../packages/polotik"),
      "@witrino": path.resolve(__dirname, "../panel-witrino/src"),
      "@commen": path.resolve(__dirname, "../../commen"),
    },
  },
});
