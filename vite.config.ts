import path from "node:path";
import fs from "node:fs";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Copy index.html to 404.html and write CNAME so GitHub Pages
// (a) serves the SPA on deep links and (b) keeps the custom domain.
const githubPagesPlugin = () => ({
  name: "gh-pages-postbuild",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const indexHtml = path.join(dist, "index.html");
    if (fs.existsSync(indexHtml)) {
      fs.copyFileSync(indexHtml, path.join(dist, "404.html"));
    }
    fs.writeFileSync(path.join(dist, "CNAME"), "gosatnet.com\n");
    fs.writeFileSync(path.join(dist, ".nojekyll"), "");
  },
});

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    githubPagesPlugin(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
