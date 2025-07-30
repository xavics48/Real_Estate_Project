// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');
// const nextConfig = {
//      i18n,
//   reactStrictMode: true,
// };

// export default nextConfig;
// Import the config using ES module syntax
import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'], // <-- Add this
  },
};

export default nextConfig;
