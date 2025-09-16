import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React Video App',
        short_name: 'VideoApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317efb',
        description: '自動播放影片的 React PWA 範例',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0', // 支援 Docker 容器內訪問
    port: 5173,
  }
})