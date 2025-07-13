/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';
import { parseBashOptions } from './helpers/bash.js';

interface Options {
  example?: 'with-tailwind';
  'skip-install'?: boolean;
  'package-manager'?: 'npm' | 'yarn' | 'pnpm';
}

export const turboTemplate = async (name: string, options: Options = {}) => {
  console.log(`Generating turbo monorepo: ${name}`);
  const cwd = path.join(templateRoot, 'turbo');
  await fs.mkdir(cwd);
  /** @ts-expect-error ma porco dio. */
  await execAsync(`yarn dlx create-turbo@latest ${name}${parseBashOptions(options)}`, { cwd });
};
