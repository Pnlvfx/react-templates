/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { parseBashOptions } from './helpers/bash.js';
import { rimraf } from '@goatjs/rimraf';

interface Options {
  empty?: boolean;
  skipInstall?: boolean;
  noTailwind?: boolean;
}

export const nextJsTemplate = async (name: string, options: Options = {}) => {
  const cwd = path.join(templateRoot, 'nextjs');
  await rimraf(cwd);
  await fs.mkdir(cwd);
  /** @ts-expect-error ma porco dio. */
  const command = `yarn dlx create-next-app@canary ${name}${parseBashOptions(options)} --yes`;
  console.log('Generation nextjs app', name, `with command:\n${command}`);
  await execAsync(command, { cwd });
};
