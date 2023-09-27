import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import commonjs from "@rollup/plugin-commonjs";

import path from "path";

const HOST = "0.0.0.0";
const REPLACEMENT = `${path.resolve(__dirname, "../src")}/`;
export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "/",
    root: path.resolve(__dirname, "../"),
    server: {
      open: true,
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: REPLACEMENT,
        },
      ],
    },
    plugins: [commonjs(), vue(/* options */)],
  });
};
