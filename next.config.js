/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'images.mockupcloud.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'unblast.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },
    ],
  },
};

module.exports = nextConfig;
