const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  // Gera um site estático (pasta out/) para publicar no GitHub Pages
  output: 'export',
  // No GitHub Pages o site fica em /<nome-do-repositorio>; localmente fica vazio
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  images: {
    unoptimized: true,
    domains: [
      'i.ibb.co',
      'avatars.githubusercontent.com',
    ],
  },

};

module.exports = nextConfig;
