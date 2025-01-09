import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "something-un",
    project: "javascript-react"
  })],

  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

  build: {
    sourcemap: true
  }
});