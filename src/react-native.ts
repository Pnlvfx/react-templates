/* eslint-disable no-console */
// npx create-react-native-library@latest --help for the list of options

import path from 'node:path';
import fs from 'node:fs/promises';
import { templateRoot } from './config.js';
import { execAsync } from '@goatjs/node/exec';

const reactNativeRoot = path.join(templateRoot, 'react-native');

const fabric = {
  slug: 'react-native-fabric',
  description: 'fabric example',
  'author-name': 'simonegauli',
  'author-email': 'simonegauli@gmail.com',
  'author-url': 'https://github.com/Pnlvfx',
  'repo-url': 'https://github.com/Pnlvfx/react-native-fabric',
  languages: 'kotlin-objc',
  type: 'fabric-view',
  example: 'vanilla',
  interactive: 'false',
};

export const reactNativeBuilderBobFabric = async (name: string) => {
  console.log(`Generating react native fabric library: ${name}`);
  await fs.mkdir(reactNativeRoot);
  const params = [];
  for (const [key, value] of Object.entries(fabric)) {
    params.push(`--${key}`, value);
  }
  await execAsync(`npx create-react-native-library@latest ${name} ${params.join(' ')}`, { cwd: reactNativeRoot });
};

export const reactNativeApp = async (name: string) => {
  console.log(`Generating react native app: ${name}`);
  await execAsync('npm uninstall -g react-native-cli @react-native-community/cli');
  await execAsync(`npx @react-native-community/cli@latest init ${name} --skip-install --install-pods false --skip-git-init`, {
    cwd: reactNativeRoot,
  });
};
