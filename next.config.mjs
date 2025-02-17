/** @type {import('next').NextConfig} */
export default {
  webpack: config => {
    return config
  }, 

  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },

  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/ChunKhai_Resume_Sep24.pdf',
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/chunkhaik',
        basePath: false,
      },
          {
        source: '/photography/:slug*',
        destination: '/photography/:slug*',
      },
      {
        source: '/:path*', // Match all paths
        destination: '/', // Rewrite to the home page
      },
    ];
  },
};