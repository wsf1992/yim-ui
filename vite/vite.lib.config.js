import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import commonjs from "@rollup/plugin-commonjs";

import path from "path";

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    resolve: {
      extensions: [".js", ".ts", ".vue", ".json"],
    },
    build: {
      target: ["es2015"],
      outDir: "lib",
      lib: {
        entry: path.resolve(__dirname, "../packages/main.ts"),
        formats: ["es", "cjs"],
        fileName: "main",
      },
      rollupOptions: {
        external: ["vue"],
      },
    },
    plugins: [commonjs(), vue(/* options */)],
  });
};
