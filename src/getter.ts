import { execAsync } from '@goatjs/node/exec';

await execAsync('npx create-next-app@canary empty --empty --yes --skip-install --no-tailwind', { cwd: '.template' });
// eslint-disable-next-line unicorn/no-process-exit
process.exit(0);
