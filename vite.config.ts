import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const { default: checker } = await import('vite-plugin-checker');
  return {
    plugins: [react(), checker({ typescript: true })],
      server: {
    open: true,
  },
  };
});
