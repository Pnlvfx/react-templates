import { rimraf } from '@goatjs/rimraf';
import fs from 'node:fs/promises';
import { templateRoot } from './config.js';
import { reactNativeApp, reactNativeBuilderBobFabric } from './react-native.js';
import { nextJsTemplate } from './next.js';

await rimraf(templateRoot);
await fs.mkdir(templateRoot);
await nextJsTemplate('empty');
await reactNativeBuilderBobFabric('fabric-library');
await reactNativeApp('default_app');
