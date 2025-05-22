/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: [
      'cdn.jsdelivr.net',
      'images.pexels.com',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
      'cdn.worldvectorlogo.com',
      'vitejs.dev',
      'streamlit.io'
    ]
  },
  experimental: {
    scrollRestoration: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }
    return config;
  }
};

module.exports = nextConfig;