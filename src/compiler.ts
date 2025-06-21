/* eslint-disable no-console */
import { execAsync } from '@goatjs/node/exec';
import { rimraf } from '@goatjs/rimraf';
import fs from 'node:fs/promises';
import path from 'node:path';
import { templateRoot } from './config.js';
import { reactNativeApp, reactNativeBuilderBobFabric } from './react-native.js';

const nextJsTemplate = async () => {
  console.log('Generating nextjs app');
  const nextJsRoot = path.join(templateRoot, 'nextjs');
  await fs.mkdir(nextJsRoot);
  await execAsync('npx create-next-app@canary empty --empty --yes --skip-install --no-tailwind', { cwd: nextJsRoot });
};

await rimraf(templateRoot);
await fs.mkdir(templateRoot);
await nextJsTemplate();
await reactNativeBuilderBobFabric();
await reactNativeApp();
