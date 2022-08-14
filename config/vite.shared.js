import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
});
