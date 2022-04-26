const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  basePath: '/login',
  compiler: {
    styledComponents: true,
  }
})

module.exports = nextConfig
