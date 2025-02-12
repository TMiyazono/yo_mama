import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  webpack: config => {
    // Vue と同じように 「@ = src/」,「~ = src/」に設定する。
    // => モジュールのパス解決とエイリアスを設定している。
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
  /* config options here */
};

export default nextConfig;
