import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const { default: checker } = await import('vite-plugin-checker');
  return {
    base: "/", // Quan trọng khi build để Netlify hiểu đúng đường dẫn assets
    plugins: [
      react(),
      checker({ typescript: true }),
    ],
    server: {
      open: true, // Chỉ dùng cho môi trường local dev
    },
    // build: {
    //   outDir: "dist", // Thư mục Netlify sử dụng
    // },
  };
});

