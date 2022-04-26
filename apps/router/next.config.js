/** @type {import('next').NextConfig} */
const development = process.env.NODE_ENV === 'development'
const LOGIN_URL = development ? process.env.LOGIN_URL : `https://nextjs-monorepo-psi.vercel.app`
const WEB_URL = development ? process.env.WEB_URL : `https://nextjs-monorepo-webapp.vercel.app`
const { UBBU_URL } = process.env
const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-in', // todo: Make it go to ubbu's homepage
        permanent: true,
        basePath: false
      },
    ]
  },
  async rewrites() {

    return {
      beforeFiles: [
        {
          source: '/',
          destination: `${UBBU_URL}`,
        },
        {
          source: '/login',
          destination: `${LOGIN_URL}/login`,
        },
        {
          source: '/login/:path*',
          destination: `${LOGIN_URL}/login/:path*`,
        },
        {
          source: '/web',
          destination: `${WEB_URL}/web`,
        },
        {
          source: '/web/:path*',
          destination: `${WEB_URL}/web/:path*`,
        },
      ],

      fallback: [
        {
          source: '/:path*',
          destination: `${UBBU_URL}/:path*`,
        },
      ],
    }  
  },
    compiler: {
    styledComponents: true,
  }
});

module.exports = nextConfig;