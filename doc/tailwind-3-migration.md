# Tailwind 3 migration + CSS-in-JS (emotion drop)

## Globally

1. Remove `./patches` directory and `patch-package` dependency + update `postinstall` NPM script.
2. Remove `.babelrc`, `.babel-plugin-macros.config.js`.
3. `$ bun run remove @emotion/babel-preset-css-prop @emotion/css @emotion/react  @emotion/server @emotion/styled @emotion/babel-plugin babel-plugin-macros twin.macro`
4. `$ bun run add autoprefixer postcss-import`
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
10. Create a `./postcss.config.cjs` with
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
  import { jsx } from '@emotion/react';
  import tw from 'twin.macro';
  ```
2. Replace all `tw=` by `className=`.
3. Refactor `css=` properties logic with `clsx` logic. For example `className={clsx(tw'text-lg', isBig && tw'p-12')}` → `className={clsx('text-lg', isBig && 'p-12')}`

Here are some usefull RegExes for your search and replace in VSCode:
- `import tw from 'twin.macro';` → `import clsx from 'clsx';`
- `\nimport \{ jsx \} from '@emotion/react';` → `\n`
- `css=\{([^}]*)\}` → `className={clsx($1)}`
- `css=\{\[([^\}\]]+)\]\}` → `className={clsx($1)}`
- `css=\{\[\n([^\}\]]+)\]\}` → `className={clsx(\n$1)}`
- `tw'([^']*)'` (replace `'` with backticks) → `'$1'`
- `tw'\n([^']*)'` (replace `'` with backticks) → `'\n$1'` (replace `'` with backticks)
- `tw="([^"]*)"` → `className="$1"`
- `tw="\n([^"]*)"` → `className="\n$1"`

Also, double check if there is no tags with multiple `className` with `className[^>]*className` or `className[^>]*[\n\t]*className`.

## With your MyComponent.styles.tsx

1. Rename to `MyComponent.styles.tsx` to `MyComponent.module.css`.
2. Remove
  ```tsx
  import { css } from '@emotion/react';
  import clsx from 'clsx';
  ```
3. Choose an entry “class” (f. ex. `.custom {}`) and refactor to “plain” CSS + Tailwind flavors (for example `${tw''}` to `@apply`).
4. In your component
  ```tsx
  import styles from './MyComponent.module.css';

  <div className={styles.custom}></div>
  ```
5. Use the `screen()` Tailwind method instead of classic media queries

Here are some usefull RegExes for your search and replace in VSCode (only for `*.styles.*`):
- `import \{ css \} from '@emotion/react';\n` → nothing
- `import tw from 'twin.macro'; \n` → nothing
- `\$\{'([^']*)'\}` → `@apply $1;`
- `\$\{'\n([^']*)'\}` (replace `'` with backticks) → `@apply $1;`
- `export default css'\n([^']*)';` (replace `'` with backticks) → `.default {\n$1}`
- `export const ([^\s]*) = css'\n([^']*)';` (replace `'` with backticks) → `.$1 {\n$2}`

👉 More information on Component-Level CSS in the [official doc](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

## For Storybook

1. Remove `.storybook/.babelrc` and `.storybook/webpack.config.js`
2. Update your `.storybook/main.ts` with something like:
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
  3. Add `import "../src/styles/globals.css";` in your `.storybook/preview.ts`



