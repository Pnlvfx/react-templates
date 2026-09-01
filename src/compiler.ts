/* eslint-disable parallelize/no-sequential-await */
import fs from 'node:fs/promises';
import { templateRoot } from './config.ts';
import { reactNativeApp } from './react-native.ts';
import { nextJsTemplate } from './next.ts';
import { reactNativeBuilderBob } from './bob.ts';
import { dbz } from '@goatjs/dbz';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { reactViteTemplate } from './vite.ts';
import { execAsync } from '@goatjs/node/exec';
import { turboTemplate } from './turbo.ts';
import { createGitClient } from '@goatjs/node/git';

const git = createGitClient();
await dbz.checkGitStatus(git);

// TODO [2026-02-12] use kebabCase from goatjs node to parse the keys from camel (change key to camel)
// add check for left changes on git

try {
  await fs.mkdir(templateRoot);
} catch {
  /* empty */
}

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
  return reactViteTemplate('example', { rolldown: true, interactive: false });
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
  case 'turbo': {
    await turboTemplate('turbo');
    break;
  }
  default: {
    await createNextApp();
    await createReactViteApp();
    // await createFabricLibrary();
    await createReactNativeApp();
    // await createElectronApp('electron-vite', { skipInstall: true, template: 'react' });
    // await turboTemplate('turbo');
  }
}

await execAsync('pnpm prettier . --write');

// TURBO SUCK, THERE IS NO WAY TO PREVENT COMMITTING AFTER RUNNINNG THIS SHIT.
// await turboTemplate('example', { example: 'with-tailwind', 'package-manager': 'pnpm', 'skip-install': true });
