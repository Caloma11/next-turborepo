/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  basePath: '/web',
  compiler: {
    styledComponents: true,
  }
})

module.exports = nextConfig
