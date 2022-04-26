const commons = require('config/next-common.config');

const development = process.env.NODE_ENV === 'development'
const LOGIN_URL = development ? process.env.LOGIN_URL : `https://login-app-steel.vercel.app`
const WEB_URL = development ? process.env.WEB_URL : `https://web-app-seven-rosy.vercel.app`
const { UBBU_URL } = process.env

const nextConfig = {
  ...commons,
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
  }
};

module.exports = nextConfig;
