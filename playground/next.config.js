const path = require('path');

module.exports = {
  future: {
    webpack5: true
  },
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    };

    return config;
  },
  env: {},
};
