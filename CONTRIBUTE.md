# Contribute

This project is a **template** and a real **playground** project at the **same time**.

## Install

**Requirement**:

- [📗 NodeJS 10+](https://nodejs.org/en/)
- [🐈 Yarn](https://yarnpkg.com/lang/en/)
- [📦 npx](https://github.com/npm/npx)

First you'll have to install the root and playground dependencies :

```bash
$ yarn
$ cd playground && yarn
```

## Run things

- `cd playground && yarn dev` for the playground project
- `yarn storybook:start` for Storybook
- `yarn cypress:open` for Cypress
- `yarn jest:start` for Jest

## Test the Github Actions

To ease a bit the Github Workflow debugging, feel free to use **[act](https://github.com/nektos/act)** like so:

```bash
$ act pull_request
```

Then create a PR and check the tests on Github.

## Create new template

When the actual files are not good enough for being copied, you must duplicate them using the pattern `FILENAME.template.EXT`. Then update the generator in `.bin/index.js`.

## Update the generator

For the moment, all the generator logic is contained inside the `.bin/index.js`.
