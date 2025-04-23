/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Gleicher Alias auch für Webpack (Runtime-Auflösung)
  webpack(config) {
    config.resolve.alias["@"] = __dirname;
    return config;
  }
};

module.exports = nextConfig;
