const commons = require('config/next-common.config');

const nextConfig = {
  ...commons,
  basePath: '/web'
};

module.exports = nextConfig;
