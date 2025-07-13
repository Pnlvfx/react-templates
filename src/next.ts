/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';

export const nextJsTemplate = async (name: string) => {
  console.log(`Generating nextjs app: ${name}`);
  const cwd = path.join(templateRoot, 'nextjs');
  await fs.mkdir(cwd);
  await execAsync(`yarn dlx create-next-app@canary ${name} --empty --yes --skip-install --no-tailwind`, { cwd });
};
