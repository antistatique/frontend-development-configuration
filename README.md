# ✅ Antistatique Frontend Development Configuration

> Antistatique truth source and **opinionated** configuration.

*If you're just to lazy to read the README  😏👉 `npx antistatique-frontend@latest`*

**Others resources**
- [📗 Tests Handbook](doc/tests-handbook.md)
- [👨‍💻 How to contribute](CONTRIBUTE.md)

Currently **provides**:
- [🔹 ESLint](https://eslint.org/)
- [🌈 Prettier](https://eslint.org/) ([except for CSS](https://github.com/prettier/prettier/issues/5948))
- [👔 Stylelint](https://stylelint.io/)
- [🟦 TypeScript](https://www.typescriptlang.org/)
- [📚 Storybook](https://storybook.js.org/)
- [🌳 Cypress](https://www.cypress.io/)
- [👞 Jest](https://jestjs.io/)

## Table of content
-  [What it does](#what-it-does)
-  [How to use](#how-to-use)
-  [What's inside?](#whats-inside)
-  [Available scripts](#available-scripts)
-  [IDE](#ide)

## What it does
- **Lints** TypeScript and CSS based on the latest standards
- Manage **pre-commit** git hook to prevent 💩 commits
- Ensure decent **code quality** at [Antistatique](https://antistatique.net/)
- Provide dev-ready **testing environement** (+ Github Actions) 

## How to use

**Requirement**:

- [📗 NodeJS 10+](https://nodejs.org/en/)
- [🐈 Yarn](https://yarnpkg.com/lang/en/)
- [📦 npx](https://github.com/npm/npx)

First, **create your project** using the dedicated scaffolding tool for your project's technologies. Here are some usefull commands that you can use :

```bash
$ npx -p antistatique-frontend@latest next # Cool, right?
$ npx create-react-app my-app --template typescript
$ npx create-next-app --example with-typescript-types my-app
```

Then, to **get this amazing environment**, simply execute the following command and answer the questions:

```bash
$ npx antistatique-frontend@latest
```

## What's inside?

```plain
.
├── .eslintrc           👉 ESLint configuration
├── .github
│   └── workflows       👉 Github Actions Workflow for Tests
├── .husky              👉 Husky (pre-commit) configuration
├── .lintstagedrc       👉 lint-staged (for pre-commits) configuration
├── .prettierrc         👉 Prettier configuration (mainly for HTML/TWIG)
├── .storybook 
│   ├── main.js         👉 Storybook configuration
│   └── preview.js      👉 Where you load you global CSS
├── .stylelintrc        👉 Stylelint configuration
├── .vscode
│   ├── extensions.json 👉 Recommended plugins to install
│   └── settings.json   👉 Encourage you to format-on-save ESLint
├── cypress
│   ├── fixtures
│   ├── integration     👉 The place to put your E2E website tests
│   ├── plugins
│   ├── screenshots
│   ├── support
│   ├── tsconfig.json
│   └── videos
├── cypress.json        👉 Cypress configuration
├── jest.config.js      👉 Jest configuration
├── package.json        👉 Your package.json, with new devDepencies and new scripts
└── tsconfig.json       👉 TypeScript configuration
```

## Available scripts

Now that you've get all the good stuff that you need, you have some new NPM scripts at your disposal:

- `yarn lint:js` : Lint your TypeScript files
- `yarn lint:css` : Lint your CSS/PostCSS files
- `yarn lint:html` : Lint your HTML/Twig files
- `yarn fix:js` : Fix JS/TS lint errors
- `yarn fix:css` : Fix CSS/PostCSS lint errors
- `yarn fix:html` : Fix HTML/Twig Prettier format
- `yarn cypress:open` :  Open Cypress (for TDD)
- `yarn cypress:run` : Run Cypress tests (website + storybook)
- `yarn jest:start` : Start Jest server
- `yarn jest:run` : Run Jest tests
- `yarn storybook:start` : Start Storybook server
- `yarn storybook:build` : Build static Storybook

## IDE

The process above has been to ensure consistent quality of our code, regardless of the project. If you want to **make your life easier** and not always have surprises when you try to commit, **make sure that your IDE is properly configured to handle those linters** to highlight (and even fix) warnings and errors when editing a file. It's just a friendly advice.

Some **ressources**:
- [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint for VSCode](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

And just in case, ask your colleagues, they surely have great tips for you 😉

