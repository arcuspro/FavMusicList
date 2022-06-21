const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins([{ trailingSlash: true }], nextConfig);
