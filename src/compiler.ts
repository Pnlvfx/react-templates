import fs from 'node:fs/promises';
import { templateRoot } from './config.js';
import { reactNativeApp } from './react-native.js';
import { nextJsTemplate } from './next.js';
import { reactNativeBuilderBob } from './bob.js';
import { checkGitStatus } from '@goatjs/node/dev/git';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { reactViteTemplate } from './vite.js';

await checkGitStatus();

// TODO [2025-12-12] use kebabCase from goatjs node to parse the keys from camel (change key to camel)
// add check for left changes on git

try {
  await fs.mkdir(templateRoot);
} catch {}

const { framework } = await yargs(hideBin(process.argv))
  .version(false)
  .strict()
  .help()
  .option('framework', { alias: 'f', type: 'string' })
  .parseAsync();

const createNextApp = () => {
  return nextJsTemplate('example', { empty: true, noTailwind: true, skipInstall: true });
};

const createReactViteApp = () => {
  return reactViteTemplate('example');
};

const createFabricLibrary = () => {
  return reactNativeBuilderBob('fabric', {
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
  });
};

const createReactNativeApp = () => {
  return reactNativeApp('example', { 'install-pods': false, 'skip-git-init': true, 'skip-install': true });
};

switch (framework) {
  case 'nextjs': {
    await createNextApp();
    break;
  }
  case 'react-vite': {
    await createReactViteApp();
    break;
  }
  case 'react-native-library': {
    await createFabricLibrary();
    break;
  }
  case 'react-native-app': {
    await createReactNativeApp();
    break;
  }
  default: {
    await createNextApp();
    await createReactViteApp();
    await createFabricLibrary();
    await createReactNativeApp();
  }
}

// TURBO SUCK, THERE IS NO WAY TO PREVENT COMMITTING AFTER RUNNINNG THIS SHIT.
// await turboTemplate('example', { example: 'with-tailwind', 'package-manager': 'yarn', 'skip-install': true });
