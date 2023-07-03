#!/usr/bin/env node

import fs from 'fs-extra';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
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
