import { execAsync } from '@goatjs/node/exec';
import { rimraf } from '@goatjs/rimraf';
import fs from 'node:fs/promises';

const root = '.template';

const nextJsTemplate = async () => {
  await execAsync('npx create-next-app@canary empty --empty --yes --skip-install --no-tailwind', { cwd: root });
};

await rimraf(root);
await fs.mkdir(root);
await nextJsTemplate();
