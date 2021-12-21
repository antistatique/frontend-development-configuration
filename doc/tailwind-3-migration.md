# Tailwind 3 migration + CSS-in-JS (emotion drop)

## Globally

1. Remove `./patches` directory and `patch-package` dependency + update `postinstall` NPM script.
2. Remove `.babelrc`, `.babel-plugin-macros.config.js`.
3. `$ yarn remove @emotion/babel-preset-css-prop @emotion/css @emotion/react  @emotion/server @emotion/styled @emotion/babel-plugin babel-plugin-macros twin.macro`
4. `$ yarn add autoprefixer postcss-import`
5. Upgrade `tailwindcss` to >3
6. Remove `<GlobalStyles>` from `pages/_app.{jsx, tsx}`
7. Clean (or remove) `pages/_document.{jsx, tsx}`
8. Remove `types/twin.d.ts`
9. Update you `tailwind.config.js` with something like:
  ```js
  module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {...},
    },
    plugins: [...],
  }
  ```
10. Create a `./postcss.config.js` with
  ```js
  module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```

## In your Components

1. Remove 
  ```tsx
  import { css } from '@emotion/react';
  import tw from 'twin.macro';
  ```
2. Replace all `tw=` by `className=`.
3. Refactor `css=` properties logic with `className` logic

## With your MyComponent.styles.tsx

1. Rename to `MyComponent.styles.tsx` to `MyComponent.module.css`.
2. Remove
  ```tsx
  import { css } from '@emotion/react';
  import tw from 'twin.macro';
  ```
3. Choose an entry “class” (f. ex. `.custom {}`) and refactor to “plain” CSS + Tailwind flavors (for example `${tw''}` to `@apply`).
4. In your component
  ```tsx
  import styles from './MyComponent.module.css';

  <div className={styles.custom}></div>
  ```

👉 More information on Component-Level CSS in the [official doc](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

## For Storybook

1. Remove `.storybook/.babelrc` and `.storybook/webpack.config.js`
2. Update your `.storybook/main.js` with something like:
  ```js
  const path = require('path');

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
  ```
  3. Add `import "../src/styles/globals.css";` in your `.storybook/preview.js`


