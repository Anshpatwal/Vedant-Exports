/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'], // Add all the languages you want to support
    defaultLocale: 'en', // The default language for your site
  },
  images: {
    domains: [
      'images.unsplash.com',
      'img.icons8.com',
      'kitabkidukan.in',
      'cdn.pixabay.com',
      'i.pravatar.cc',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
};

module.exports = nextConfig;
