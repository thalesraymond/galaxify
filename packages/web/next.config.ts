import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    turbopack: {
        root: path.resolve("../../"),
    },
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:4000/api/:path*",
            },
        ];
    },
};

export default nextConfig;
