/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  // distDir: 'build',
  compiler: {
    styledComponents: true
  }
});

module.exports = nextConfig;
