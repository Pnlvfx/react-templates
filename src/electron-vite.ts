/* eslint-disable parallelize/no-sequential-await */
/* eslint-disable no-console */
import path from 'node:path';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { rimraf } from '@goatjs/rimraf';
import { templateRoot } from './config.ts';
import { parseBashOptions } from './helpers/bash.ts';

interface Options {
  template?: 'react' | 'vue' | 'vanilla' | 'svelte';
  skipInstall?: boolean;
}

export const createElectronApp = async (name: string, { skipInstall, template = 'react' }: Options = {}) => {
  const cwd = path.join(templateRoot, 'electron-vite');
  await rimraf(cwd);
  await fs.mkdir(cwd, { recursive: true });
  const command = `pnpm create @quick-start/electron ${name} --template ${template}${parseBashOptions({ skip: skipInstall })}`;
  console.log('Generating electron-vite app', name, `with command:\n${command}`);
  await execAsync(command, { cwd });
};
