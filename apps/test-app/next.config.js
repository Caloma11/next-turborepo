const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "https://login-app-steel.vercel.app/login",
      },
      {
        source: "/register",
        destination: "https://play.ubbu.io/signup#!/sign-up",
      }
    ]
  },
  compiler: {
    styledComponents: true,
  }
});
