import { defineConfig, loadEnv } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base: "/",
    plugins: [sveltekit()],
  });
};
