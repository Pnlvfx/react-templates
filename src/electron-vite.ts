/* eslint-disable no-console */
import path from 'node:path';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { rimraf } from '@goatjs/rimraf';
import { templateRoot } from './config.js';
import { parseBashOptions } from './helpers/bash.js';

interface Options {
  template?: 'react' | 'vue' | 'vanilla' | 'svelte';
  skipInstall?: boolean;
}

export const createElectronApp = async (name: string, { skipInstall, template = 'react' }: Options = {}) => {
  const cwd = path.join(templateRoot, 'electron-vite');
  await rimraf(cwd);
  await fs.mkdir(cwd, { recursive: true });
  /** @ts-expect-error ma porco dio. */
  const command = `yarn create electron-vite ${name} --template ${template} ${parseBashOptions(skipInstall)} --yes`;
  console.log('Generating electron-vite app', name, `with command:\n${command}`);
  await execAsync(command, { cwd });
};
