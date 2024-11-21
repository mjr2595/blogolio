import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: "/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});
