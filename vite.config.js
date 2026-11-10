import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/portfolio/", // Ensure this matches your repo name
  plugins: [tailwindcss(), react()],
});
