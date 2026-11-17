import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Die Render Static Site wird unter der Root-Domain veröffentlicht.
// Absolute Asset-Pfade funktionieren auch bei /impressum/ oder /datenschutz/.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
