import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  basePath: "/count-along",
  transpilePackages: ["@kids-games/core"],
};

export default withPWA(nextConfig);
