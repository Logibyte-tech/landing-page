/** @type { import("next").NextConfig } */
const nextConfig = {
  output: "export",
  // For custom domain, we don't need basePath or assetPrefix
  images: { 
    unoptimized: true,
    // Add your custom domain to the allowed image domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logibyte.smartcodee.com',
      }
    ]
  },
};

module.exports = nextConfig; 