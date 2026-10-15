import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: '/copia_petcard/',
  server:
    command === 'serve'
      ? {
          host: 'localhost',
          port: 5173,
          https: {
            key: fs.readFileSync('./certs/localhost.key'),
            cert: fs.readFileSync('./certs/localhost.crt')
          }
        }
      : undefined
}));