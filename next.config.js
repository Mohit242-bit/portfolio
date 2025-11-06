/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    // Optimize Three.js bundle
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    })
    
    return config
  },
  productionBrowserSourceMaps: false,
  compress: true,
}

module.exports = nextConfig
