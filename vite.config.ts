import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "client",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "client/index.html"),
        about: resolve(__dirname, "client/about.html"),
        services: resolve(__dirname, "client/services.html"),
        contact: resolve(__dirname, "client/contact.html"),
        products: resolve(__dirname, "client/products.html"),
      },
    },
  },
  server: {
    open: true,
  },
});
