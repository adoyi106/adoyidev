import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), eslint()],
});
