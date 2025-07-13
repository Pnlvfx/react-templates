/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { parseBashOptions } from './helpers/bash.js';

interface Options {
  empty?: boolean;
  skipInstall?: boolean;
  noTailwind?: boolean;
}

export const nextJsTemplate = async (name: string, options: Options = {}) => {
  console.log(`Generating nextjs app: ${name}`);
  const cwd = path.join(templateRoot, 'nextjs');
  await fs.mkdir(cwd);
  /** @ts-expect-error ma porco dio. */
  await execAsync(`yarn dlx create-next-app@canary ${name}${parseBashOptions(options)}`, { cwd });
};
