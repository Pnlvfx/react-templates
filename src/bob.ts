/* eslint-disable no-console */
import { execAsync } from '@goatjs/node/exec';
import fs from 'node:fs/promises';
import path from 'node:path';
import { templateRoot } from './config.js';
import { parseBashOptions } from './helpers/bash.js';
import { rimraf } from '@goatjs/rimraf';

interface Options {
  slug?: string;
  description?: string;
  'author-name'?: string;
  'author-email'?: string;
  'author-url'?: string;
  'repo-url'?: string;
  languages?: string;
  type?: string;
  example?: string;
  interactive?: string;
}

export const reactNativeBuilderBob = async (name: string, options: Options = {}) => {
  console.log(`Generating react native fabric library: ${name}`);
  const cwd = path.join(templateRoot, 'bob');
  await rimraf(cwd);
  await fs.mkdir(cwd);
  /** @ts-expect-error ma porco dio. */
  await execAsync(`yarn dlx create-react-native-library@latest ${name}${parseBashOptions(options)}`, { cwd });
};
