import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      globals: true, // Opcional: simplifica las pruebas
      include: ["**/*.{test,spec}.[jt]s?(x)"], // Opcional: patrones explícitos
      coverage: {
        provider: "v8",
        reporter: ["text", "html", "json"],
        exclude: ["node_modules/**", "dist/**", "e2e/**", "coverage/**"],
        thresholds: {
          lines: 80,
        },
      },
    },
  })
);
