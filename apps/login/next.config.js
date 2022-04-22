const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
});
