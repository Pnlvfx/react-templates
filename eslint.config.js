import { nodeConfigs } from '@goatjs/node-eslint';
import { defineConfig } from '@eslint/config-helpers';

export default defineConfig([{ ignores: ['dist', '.yarn', '.template'] }, ...nodeConfigs({ tsconfigRootDir: import.meta.dirname })]);
