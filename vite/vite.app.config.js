import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import commonjs from "@rollup/plugin-commonjs";

import path from "path";
const REPLACEMENT = `${path.resolve(__dirname, "../src")}/`;

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "/",
    root: path.resolve(__dirname, "../"),
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: REPLACEMENT,
        },
      ],
      extensions: [".js", ".ts", ".vue", ".json"],
    },
    build: {
      target: ["es2015"],
      outDir: "dist",
    },
    plugins: [commonjs(), vue(/* options */)],
  });
};
