/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "static.vecteezy.com" },
      { hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
