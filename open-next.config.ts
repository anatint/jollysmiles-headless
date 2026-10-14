import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig({
    incrementalCache: "dummy",
    tagCache: "dummy",
    queue: "dummy",
  }),
  // `npm run build` runs the OpenNext build, so point it at plain Next to avoid recursion.
  buildCommand: "npx next build",
};
