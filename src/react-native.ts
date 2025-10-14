/* eslint-disable no-console */
// yarn dlx create-react-native-library@latest --help for the list of options

import path from 'node:path';
import fs from 'node:fs/promises';
import { templateRoot } from './config.js';
import { execAsync } from '@goatjs/node/exec';
import { parseBashOptions } from './helpers/bash.js';
import { rimraf } from '@goatjs/rimraf';

interface Options {
  'skip-install'?: boolean;
  'install-pods'?: boolean;
  'skip-git-init'?: boolean;
}

export const reactNativeApp = async (name: string, options: Options = {}) => {
  console.log(`Generating react native app: ${name}`);
  await execAsync('npm uninstall -g react-native-cli @react-native-community/cli');
  const cwd = path.join(templateRoot, 'react-native');
  await rimraf(cwd);
  await fs.mkdir(cwd);
  /** @ts-expect-error ma porco dio. */
  await execAsync(`yarn dlx @react-native-community/cli@latest init ${name}${parseBashOptions(options)}`, { cwd });
};
