const path = require('path');
const tailwindcss = require('tailwindcss');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-css-modules-preset',
    // 'storybook-addon-next-router',
  ],
  // staticDirs: ['../public'],
  // typescript: { reactDocgen: 'react-docgen-typescript' },
  typescript: { reactDocgen: false },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // Needed because of an issue with the latest version in framer-motion
    // https://github.com/framer/motion/issues/1307
    // config.module.rules.push({
    //   type: "javascript/auto",
    //   test: /\.mjs$/,
    //   include: /node_modules/,
    // });

    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    };

    const fileLoaderRule = config.module.rules.find(
      (rule) => !Array.isArray(rule.test) && rule.test.test(".svg"),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}