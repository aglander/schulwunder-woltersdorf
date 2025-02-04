import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add middleware to handle SPA routing
    middlewares: [
      (req, res, next) => {
        // Redirect all requests to index.html except for assets
        if (!req.url?.includes('.')) {
          req.url = '/';
        }
        next();
      },
    ],
  },
  preview: {
    // Also handle SPA routing in preview mode
    middlewares: [
      (req, res, next) => {
        if (!req.url?.includes('.')) {
          req.url = '/';
        }
        next();
      },
    ],
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
}));