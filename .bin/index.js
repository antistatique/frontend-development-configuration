#!/usr/bin/env node

const fs = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');
const { exec } = require("child_process");

const cwd = path.join(path.dirname(__filename), '..');

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
      fs.copySync(`${cwd}/.storybook`, '.storybook');
      fs.removeSync('./.storybook/preview.js');
      fs.moveSync('./.storybook/preview.template.js', './.storybook/preview.js');
    }

    if (hasTests) {
      deps = [...deps, ...testsDeps];
      fs.copySync(`${cwd}/jest.config.js`, 'jest.config.js');
      fs.copySync(`${cwd}/cypress.json`, 'cypress.json');
      fs.copySync(`${cwd}/cypress`, 'cypress');
    }

    if (hasStylelint) {
      deps = [...deps, ...stylelintDeps];
      fs.copySync(`${cwd}/.stylelintrc`, '.stylelintrc');
    }

    fs.copySync(`${cwd}/.eslintrc`, '.eslintrc');
    fs.copySync(`${cwd}/.github`, '.github');
    fs.copySync(`${cwd}/.huskyrc`, '.huskyrc');
    fs.copySync(`${cwd}/.lintstagedrc`, '.lintstagedrc');
    fs.copySync(`${cwd}/.vscode`, '.vscode');
    fs.copySync(`${cwd}/tsconfig.json`, 'tsconfig.json');

    fs.removeSync('./.github/workflows/ci.yml');
    fs.moveSync('./.github/workflows/ci.template.yml', './.github/workflows/ci.yml');

    const packageJson = fs.readJsonSync('./package.json');
    fs.writeJsonSync('./package.json', {
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
  