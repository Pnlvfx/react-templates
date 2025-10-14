import { rimraf } from '@goatjs/rimraf';
import fs from 'node:fs/promises';
import { templateRoot } from './config.js';
import { reactNativeApp } from './react-native.js';
import { nextJsTemplate } from './next.js';
import { reactNativeBuilderBob } from './bob.js';
import { checkGitStatus } from '@goatjs/node/dev/git';

await checkGitStatus();

// TODO use kebabCase from goatjs node to parse the keys from camel (change key to camel)
// add check for left changes on git

await rimraf(templateRoot);
await fs.mkdir(templateRoot);
await nextJsTemplate('example', { empty: true, noTailwind: true, skipInstall: true });
await reactNativeBuilderBob('fabric', {
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
await reactNativeApp('example', { 'install-pods': false, 'skip-git-init': true, 'skip-install': true });

// TURBO SUCK, THERE IS NO WAY TO PREVENT COMMITTING AFTER RUNNINNG THIS SHIT.
// await turboTemplate('example', { example: 'with-tailwind', 'package-manager': 'yarn', 'skip-install': true });
