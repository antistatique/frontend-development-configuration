#!/usr/bin/env node

import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';
import { exec } from 'child_process';

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

const baseDeps = [
  "@swc/core",
  "@swc/jest",
  "@types/jest",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "babel-eslint",
  "cypress",
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
  "stylelint",
  "stylelint-config-standard",
  "stylelint-order",
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

const scripts = {
  "lint:js": "eslint --ext js,jsx,ts,tsx ./ --max-warnings=0",
  "lint:css": "stylelint 'src/**/*.css'",
  "fix:js": "eslint --ext js,jsx,ts,tsx ./ --max-warnings=0 --fix",
  "fix:css": "stylelint --fix 'src/**/*.css'",
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  "jest:start": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll",
  "jest:run": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
  "storybook:start": "storybook dev --no-open -p 6006",
  "storybook:build": "storybook build",
  "postinstall": "husky install",
  "prepublishOnly": "pinst --disable",
  "postpublish": "pinst --enable"
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
        { name: 'Stylelint', value: 'stylelint', checked: true },
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
      fs.copySync(`${srcd}/playground/.storybook`, `${cwd}/.storybook`);
    }

    if (hasTests) {
      deps = [...deps, ...testsDeps];
      fs.copySync(`${srcd}/jest.config.js`, `${cwd}/jest.config.js`);
      fs.copySync(`${srcd}/cypress.config.ts`, `${cwd}/cypress.config.ts`);
      fs.copySync(`${srcd}/cypress`, `${cwd}/cypress`);
    }

    if (hasStylelint) {
      deps = [...deps, ...stylelintDeps];
      fs.copySync(`${srcd}/.stylelintrc`, `${cwd}/.stylelintrc`);
    }

    fs.copySync(`${srcd}/.eslintrc`, `${cwd}/.eslintrc`);
    fs.copySync(`${srcd}/.github`, `${cwd}/.github`);
    fs.copySync(`${srcd}/.husky`, `${cwd}/.husky`);
    fs.copySync(`${srcd}/.lintstagedrc`, `${cwd}/.lintstagedrc`);
    fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/tsconfig.json`);
    fs.copySync(`${srcd}/tsconfig.test.json`, `${cwd}/tsconfig.test.json`);
    fs.copySync(`${srcd}/playground/tsconfig.eslint.json`, `${cwd}/tsconfig.eslint.json`);

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

    const eslintConfig = fs.readJsonSync(`${cwd}/.eslintrc`);
    fs.writeJsonSync(`${cwd}/.eslintrc`, {
      ...eslintConfig,
      parserOptions: {
        ...eslintConfig.parserOptions,
        project: './tsconfig.eslint.json',
      }
    });

    exec(`yarn add --dev ${deps.join(' ')}`, () => {
      console.log('✅ Achieved with success!');
    });
  })
  .catch(error => {
    console.error(error);
  });
