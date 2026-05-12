/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['starter.localhost', '*.starter.localhost'],
  transpilePackages: ['@starter/app', '@starter/ui'],
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    return config
  },
}

export default nextConfig
