#!/usr/bin/env node

const fs = require('fs-extra');
const { exec } = require("child_process");

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

console.log('Copying file...');
fs.copySync(`${srcd}/playground`, `${cwd}`);
fs.removeSync(`${cwd}/tsconfig.json`);
fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/tsconfig.json`);
fs.removeSync(`${cwd}/.storybook`);
exec('yarn', () => {
  console.log('✅ Achieved with success!');
});
  