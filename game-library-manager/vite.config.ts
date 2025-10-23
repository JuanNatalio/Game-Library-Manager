import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tailwind works via PostCSS; no Vite plugin required here.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
