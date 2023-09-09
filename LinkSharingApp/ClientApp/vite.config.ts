import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  server: {
    port: 3399,
    https: true,
    strictPort: true,
    proxy: {
      "/lsa": {
        target: "https://localhost:7042",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/lsa/, "/lsa"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
