import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/fms-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/fms-api/, ''),
            target: 'http://47.121.216.36:19181/',
            ws: true,
          },
          '/mms-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/mms-api/, ''),
            target: 'http://47.121.216.36:19181/',
            ws: true,
          },
          // '/api': {
          //   changeOrigin: true,
          //   rewrite: (path) => path.replace(/^\/api/, ''),
          //   // mock代理目标地址
          //   target: 'http://localhost:5320/api',
          //   ws: true,
          // },
          '/sys-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/sys-api/, ''),
            target: 'http://47.121.216.36:19100/',
            ws: true,
          },
          '/filplus-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/filplus-api/, ''),
            target: 'http://47.121.216.36:18881/',
            ws: true,
          }
        },
      },
    },
  };
});
