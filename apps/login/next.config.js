const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
        basePath: false
      },
    ]
  },
  compiler: {
    styledComponents: true,
  }
});
