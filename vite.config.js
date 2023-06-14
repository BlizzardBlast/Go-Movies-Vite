import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      // Plugin options
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
