/* eslint-disable no-console */
import path from 'node:path';
import { templateRoot } from './config.js';
import fs from 'node:fs/promises';
import { execAsync } from '@goatjs/node/exec';

export const nextJsTemplate = async (name: string) => {
  console.log(`Generating nextjs app: ${name}`);
  const nextJsRoot = path.join(templateRoot, 'nextjs');
  await fs.mkdir(nextJsRoot);
  await execAsync(`npx create-next-app@canary ${name} --empty --yes --skip-install --no-tailwind`, { cwd: nextJsRoot });
};
