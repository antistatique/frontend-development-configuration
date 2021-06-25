const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      fallback: { fs: false, module: false },
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
  env: {},
};