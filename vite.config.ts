import { defineConfig, loadEnv } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "node:path";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base: "/",
    plugins: [sveltekit()],
    resolve: {
      alias: {
        $styles: path.resolve(__dirname, "src/styles"),
      },
    },
  });
};
