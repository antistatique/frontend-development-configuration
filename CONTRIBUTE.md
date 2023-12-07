# Contribute

This project is a **template** and a real **playground** project at the **same time**.

## Install

**Requirement**:

- [📗 NodeJS 10+](https://nodejs.org/en/)
- [🥟 Bun >= 1.0.13](https://bun.sh/) - Dependency manager

First you'll have to install the root and playground dependencies :

```bash
$ bun install -y
$ cd playground && bun install -y
```

## Run things

- `cd playground && bun run dev` for the playground project
- `bun run storybook:start` for Storybook
- `bun run cypress:open` for Cypress
- `bun run jest:start` for Jest

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
