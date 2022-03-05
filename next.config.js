const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  // "each of the packages that will be in // packages"
]);
module.exports = withPlugins([withTM()], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});