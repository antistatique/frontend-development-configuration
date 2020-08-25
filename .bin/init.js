#!/usr/bin/env node

const fs = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');
const { exec } = require("child_process");

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

const baseDeps = [
  "@types/jest",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "babel-eslint",
  "eslint",
  "eslint-config-airbnb-typescript",
  "eslint-config-prettier",
  "eslint-import-resolver-typescript",
  "eslint-plugin-html",
  "eslint-plugin-import",
  "eslint-plugin-jsx-a11y",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-simple-import-sort",
  "husky",
  "lint-staged",
  "prettier",
  "typescript",
];

const storybookDeps = [
  "@babel/core",
  "@storybook/addon-actions",
  "@storybook/addon-essentials",
  "@storybook/addon-links",
  "@storybook/react",
  "babel-loader",
];

const testsDeps = [
  "cypress",
  "jest",
  "ts-jest",
];

const stylelintDeps = [
  "stylelint",
  "stylelint-config-standard",
  "stylelint-order",
];

const scripts = {
  "lint:js": "eslint --ext js,jsx,ts,tsx ./ --max-warnings=0",
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  "jest:start": "jest --watchAll",
  "jest:run": "jest",
  "storybook:start": "NODE_PATH=src start-storybook -p 6006",
  "storybook:build": "NODE_PATH=src build-storybook"
};

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'features',
      message: 'Do you need some extras ?',
      choices: [
        { name: 'Storybook', value: 'storybook', checked: true },
        { name: 'Tests (Cypress + Jest)', value: 'tests', checked: true },
        { name: 'Stylelint', value: 'stylelint', checked: false },
      ]
    }
  ])
  .then(answers => {
    console.log('Preparing your environment...');
    let deps = baseDeps;

    const hasStorybook = answers.features.includes('storybook');
    const hasTests = answers.features.includes('tests');
    const hasStylelint = answers.features.includes('stylelint');

    if (hasStorybook) {
      deps = [...deps, ...storybookDeps];
      fs.copySync(`${srcd}/.storybook`, `${cwd}/.storybook`);
      fs.removeSync('./.storybook/preview.js');
      fs.moveSync('./.storybook/preview.template.js', `${cwd}/.storybook/preview.js`);
    }

    if (hasTests) {
      deps = [...deps, ...testsDeps];
      fs.copySync(`${srcd}/jest.config.js`, `${cwd}/jest.config.js`);
      fs.copySync(`${srcd}/cypress.json`, `${cwd}/cypress.json`);
      fs.copySync(`${srcd}/cypress`, `${cwd}/cypress`);
    }

    if (hasStylelint) {
      deps = [...deps, ...stylelintDeps];
      fs.copySync(`${srcd}/.stylelintrc`, `${cwd}/.stylelintrc`);
    }

    fs.copySync(`${srcd}/.eslintrc`, `${cwd}/.eslintrc`);
    fs.copySync(`${srcd}/.github`, `${cwd}/.github`);
    fs.copySync(`${srcd}/.huskyrc`, `${cwd}/.huskyrc`);
    fs.copySync(`${srcd}/.lintstagedrc`, `${cwd}/.lintstagedrc`);
    fs.copySync(`${srcd}/.vscode`, `${cwd}/.vscode`);
    fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/tsconfig.json`);

    fs.removeSync(`${cwd}/.github/workflows/ci.yml`);
    fs.moveSync(`${cwd}/.github/workflows/ci.template.yml`, `${cwd}/.github/workflows/ci.yml`);

    const packageJson = fs.readJsonSync(`${cwd}/package.json`);
    fs.writeJsonSync(`${cwd}/package.json`, {
      ...packageJson,
      scripts: {
        ...packageJson.scripts,
        ...scripts,
      }
    });

    exec(`yarn add --dev ${deps.join(' ')}`, () => {
      console.log('✅ Achieved with success!');
    });
  })
  .catch(error => {
    console.error(error);
  });
  