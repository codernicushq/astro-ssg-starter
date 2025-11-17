// @ts-check
import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    playformCompress(),
    sitemap({
      filter(page) {
        return !page.includes("/admin/");
      },
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  site: "http://localhost:4321",
  output: "static",
});
