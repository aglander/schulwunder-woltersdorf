
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Connect } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add middleware to handle SPA routing
    middlewares: [
      (req: Connect.IncomingMessage, res: any, next: Connect.NextFunction) => {
        // Redirect all requests to index.html except for assets
        if (!req.url?.includes('.')) {
          req.url = '/';
        }
        next();
      },
    ],
  },
  preview: {
    port: 8080,
    host: true,
    strictPort: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable SSG (Static Site Generation)
    ssrBuildEnabled: true,
    // Optimize build size
    minify: 'terser',
    // Reduce chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          // Add hash to asset filenames for better caching
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
    // Enable aggressive code optimization
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Configure asset optimization
    assetsInclude: ['**/*.{png,jpg,jpeg,gif,svg,webp}'],
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb as base64
  },
}));
