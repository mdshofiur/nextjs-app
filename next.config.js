/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //     domains: ['localhost', 'wu7lxkjnut3huqma.public.blob.vercel-storage.com','https://fakestoreapi.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "wu7lxkjnut3huqma.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
