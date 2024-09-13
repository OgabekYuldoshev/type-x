import { defineConfig } from "tsup";
import postcssPlugin from "esbuild-postcss";

export default defineConfig({
  entry: ["./src/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react"],
  minify: true,
  dts: true,
  treeshake: true,
  sourcemap: true,
  esbuildPlugins: [postcssPlugin()],
});
