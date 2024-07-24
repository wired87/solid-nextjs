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
      },{
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'www.travelpayouts.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'i2.wp.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'www.nextbraintech.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },{
        protocol: 'https',
        hostname: 'blog.solguruz.com',
        pathname: '/**',// wp-content/uploads/2020/07/' // Adjust the path if needed based on your image URLs
      },
    ],
  },
};

module.exports = nextConfig;
