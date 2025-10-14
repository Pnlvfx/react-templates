import { nodeConfigs } from '@goatjs/node-eslint';
import { defineConfig } from '@eslint/config-helpers';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export default defineConfig([{ ignores: ['dist', '.yarn', '.template'] }, ...nodeConfigs({ tsconfigRootDir: import.meta.dirname })]);
