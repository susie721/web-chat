/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://dev.api.helloadmin.cn/:path*',
  //     },
  //   ]
  // },
  output: 'standalone',
  experimental: {
    allowMiddlewareResponseBody: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: false,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  }
}

module.exports = nextConfig
