/* eslint-disable no-console */
import { execAsync } from '@goatjs/node/exec';
import { rimraf } from '@goatjs/rimraf';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = '.template';

const nextJsTemplate = async () => {
  console.log('Generating nextjs app');
  const nextJsRoot = path.join(root, 'nextjs');
  await fs.mkdir(nextJsRoot);
  await execAsync('npx create-next-app@canary empty --empty --yes --skip-install --no-tailwind', { cwd: nextJsRoot });
};

// npx create-react-native-library@latest --help for the list of options

const fabric = {
  slug: 'react-native-fabric',
  description: 'fabric example',
  'author-name': 'simonegauli',
  'author-email': 'simonegauli@gmail.com',
  'author-url': 'https://github.com/Pnlvfx',
  'repo-url': 'https://github.com/Pnlvfx/react-native-fabric',
  languages: 'kotlin-objc',
  type: 'fabric-view',
  'react-native-version': '0.80',
  example: 'vanilla',
  interactive: 'false',
};

const reactNativeBuilderBobFabric = async () => {
  console.log('Generating react native fabric library');
  const reactNativeRoot = path.join(root, 'react-native');
  await fs.mkdir(reactNativeRoot);
  const params = [];
  for (const [key, value] of Object.entries(fabric)) {
    params.push(`--${key}`, value);
  }
  await execAsync(`npx create-react-native-library@latest fabric ${params.join(' ')}`, { cwd: reactNativeRoot });
};

await rimraf(root);
await fs.mkdir(root);
await nextJsTemplate();
await reactNativeBuilderBobFabric();
