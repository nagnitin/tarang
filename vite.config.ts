import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const newsApiKey = env.VITE_NEWS_API_KEY;

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      proxy: newsApiKey
        ? {
            "/api/news": {
              target: "https://newsapi.org",
              changeOrigin: true,
              rewrite: (pathStr) => pathStr.replace(/^\/api\/news/, "/v2/everything"),
              headers: {
                "X-Api-Key": newsApiKey,
              },
            },
          }
        : undefined,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
