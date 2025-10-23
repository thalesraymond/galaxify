import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
    server: {
        port: 4000,
    },
    plugins: [tsconfigPaths()],
}));
