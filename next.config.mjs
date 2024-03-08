/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/invite/n2pWEjjNnD",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/ExamManager",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
