import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  base:
    process.env.NODE_ENV === "production"
      ? "/programmers-from-the-same-company/"
      : undefined,
});
