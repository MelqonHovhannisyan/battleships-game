import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: "@types",
        replacement: resolve(__dirname, "src/types"),
      },
    ],
  },
});
