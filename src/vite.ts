/* eslint-disable no-console */
import path from 'node:path';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { templateRoot } from './config.js';
import { rimraf } from '@goatjs/rimraf';

export const reactViteTemplate = async (name: string) => {
  const cwd = path.join(templateRoot, 'react-vite');
  await rimraf(cwd);
  await fs.mkdir(cwd);
  const command = `yarn create vite ${name} --template react-ts`;
  console.log('Generation react vite app', name, `with command:\n${command}`);
  await execAsync(command, { cwd });
};
