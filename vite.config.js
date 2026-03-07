import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/React-Tailwind4.github.io/', // Ensure this matches your repo name
  plugins: [tailwindcss(), react()],
});