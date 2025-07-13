/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';

export const turboTemplate = async (name: string) => {
  console.log(`Generating turbo monorepo: ${name}`);
  const cwd = path.join(templateRoot, 'turbo');
  await fs.mkdir(cwd);
  await execAsync(`yarn dlx create-turbo@latest --example ${name}`, { cwd });
};
