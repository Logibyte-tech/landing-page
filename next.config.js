/** @type { import("next").NextConfig } */
const nextConfig = {
  output: "export",
  // (Optional) If you're using images (for example, from unsplash) and you're not using a custom server (or "next start"), you'll also need to set "images" to "unoptimized" (or use "images.remotePatterns" (recommended) if you're using "images.domains" (which is deprecated)):
  images: { unoptimized: true, /* (or use "remotePatterns" if you're using "domains") */ },
  // (Optional) If your repo is not at the root (e.g. "username.github.io/repo"), you'll need "basePath" and "assetPrefix" (for example, "basePath": "/YOUR_REPO_NAME" and "assetPrefix": "/YOUR_REPO_NAME/").
};

module.exports = nextConfig; 