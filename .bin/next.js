#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require("child_process");

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

console.log('Copying file...');
fs.copySync(`${srcd}/playground/*`, `${cwd}`);
exec('yarn', () => {
  console.log('✅ Achieved with success!');
});
  