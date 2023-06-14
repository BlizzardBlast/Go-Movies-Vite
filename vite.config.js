import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactPlugin from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    reactRefresh(),
    reactPlugin(),
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  logLevel: "info",
  envDir: ".",
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  clearScreen: false,
  envPrefix: "VITE_",
  css: {
    devSourcemap: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
});
