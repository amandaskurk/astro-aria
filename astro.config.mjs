import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://amandaskurk.github.io",
  base: "/astro-aria",
  integrations: [tailwind()],
});
