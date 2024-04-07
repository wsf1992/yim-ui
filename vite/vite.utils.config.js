import { defineConfig } from "vite";

import path from "path";

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    resolve: {
      extensions: [".js", ".ts"],
    },
    build: {
      target: ["es2015"],
      outDir: "util",
      lib: {
        entry: path.resolve(__dirname, "../utils/index.js"),
        formats: ["es", "cjs"],
        fileName: "main",
      },
    },
  });
};
