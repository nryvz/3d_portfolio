import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/3d_portfolio/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
