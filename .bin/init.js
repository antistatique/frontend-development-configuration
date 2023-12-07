#!/usr/bin/env node

import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();
const spinner = ora('Preparing your environment...');

const baseDeps = [
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "babel-eslint",
  "dotenv",
  "eslint",
  "eslint-config-airbnb",
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
  "eslint-plugin-tailwind",
  "husky",
  "jest",
  "lint-staged",
  "pinst",
  "prettier",
  "typescript",
];

const storybookDeps = [
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-essentials",
  "@storybook/addon-links",
  "@storybook/builder-vite",
  "@storybook/nextjs",
  "@storybook/react",
  "@storybook/react-vite",
  "storybook",
];

const testsDeps = [
  "@swc/core",
  "@swc/jest",
  "@types/jest",
  "cypress",
  "dotenv",
  "jest",
  "ts-jest",
];

const stylelintDeps = [
  "stylelint",
  "stylelint-config-standard",
  "stylelint-order",
];

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'features',
      message: 'Do you need some extras?',
      choices: [
        { name: 'Storybook', value: 'storybook', checked: true },
        { name: 'Tests (Cypress + Jest)', value: 'tests', checked: true },
        { name: 'Stylelint', value: 'stylelint', checked: true },
      ]
    }
  ])
  .then(answers => {
    spinner.start();
    let deps = baseDeps;

    const hasStorybook = answers.features.includes('storybook');
    const hasTests = answers.features.includes('tests');
    const hasStylelint = answers.features.includes('stylelint');

    if (hasStorybook) {
      deps = [...deps, ...storybookDeps];
      fs.copySync(`${srcd}/playground/.storybook`, `${cwd}/.storybook`);
    }

    if (hasTests) {
      deps = [...deps, ...testsDeps];
      fs.copySync(`${srcd}/jest.config.js`, `${cwd}/jest.config.js`);
      fs.copySync(`${srcd}/cypress.config.ts`, `${cwd}/cypress.config.ts`);
      fs.copySync(`${srcd}/cypress`, `${cwd}/cypress`);
      fs.copySync(`${srcd}/tsconfig.test.json`, `${cwd}/tsconfig.test.json`);
    }

    if (hasStylelint) {
      deps = [...deps, ...stylelintDeps];
      fs.copySync(`${srcd}/.stylelintrc`, `${cwd}/.stylelintrc`);
    }

    fs.copySync(`${srcd}/.eslintrc`, `${cwd}/.eslintrc`);
    fs.copySync(`${srcd}/.github`, `${cwd}/.github`);
    fs.copySync(`${srcd}/.husky`, `${cwd}/.husky`);
    fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/tsconfig.json`);
    fs.copySync(`${srcd}/playground/tsconfig.eslint.json`, `${cwd}/tsconfig.eslint.json`);

    fs.removeSync(`${cwd}/.github/workflows/ci.yml`);
    fs.moveSync(`${cwd}/.github/workflows/ci.template.yml`, `${cwd}/.github/workflows/ci.yml`);

    const packageJson = fs.readJsonSync(`${cwd}/package.json`);
    let scripts = {
      "lint:js": "eslint --ext js,jsx,ts,tsx ./ --max-warnings=0",
      "fix:js": "eslint --ext js,jsx,ts,tsx ./ --max-warnings=0 --fix",
    };
    if (hasStylelint) {
      scripts = {
        ...scripts,
        "lint:css": "stylelint 'src/**/*.css'",
        "fix:css": "stylelint --fix 'src/**/*.css'",
      }
    }
    if (hasStorybook) {
      scripts = {
        ...scripts,
        "storybook:start": "storybook dev --no-open -p 6006",
        "storybook:build": "storybook build",
      }
    }
    if (hasTests) {
      scripts = {
        ...scripts,
        "cypress:open": "cypress open",
        "cypress:run": "cypress run",
        "jest:start": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll",
        "jest:run": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
      }
    }
    scripts = {
      ...scripts,
      "postinstall": "husky install",
      "prepublishOnly": "pinst --disable",
      "postpublish": "pinst --enable"
    }
    fs.writeJsonSync(`${cwd}/package.json`, {
      ...packageJson,
      scripts: {
        ...packageJson.scripts,
        ...scripts,
      }
    });

    const eslintConfig = fs.readJsonSync(`${cwd}/.eslintrc`);
    fs.writeJsonSync(`${cwd}/.eslintrc`,{
      ...eslintConfig,
      parserOptions: {
        ...eslintConfig.parserOptions,
        project: './tsconfig.eslint.json',
      }
    },
    {
      spaces: 2
    });

    let lintstagedConfig = {
      "src/**/*.{js,jsx,ts,tsx}": "eslint --ext .js,.jsx,.ts,.tsx --max-warnings=0",
    };
    if (hasStylelint) {
      lintstagedConfig = {
        ...lintstagedConfig,
        "src/**/*.{css,scss,styles.js,styles.jsx}": "stylelint"
      };
    }
    fs.writeJsonSync(`${cwd}/.lintstagedrc`, lintstagedConfig, { spaces: 2 });

    exec(`bun add --dev ${deps.join(' ')}`, () => {
      spinner.succeed();
    });
  })
  .catch(error => {
    console.error(error);
  });
