import { updateLocalDeps } from '@goatjs/updater';

await updateLocalDeps({
  '@goatjs/eslint': 'github:Pnlvfx/eslint',
  '@goatjs/node': 'github:Pnlvfx/goatjs#workspace=@goatjs/node',
  '@goatjs/rimraf': 'github:Pnlvfx/goatjs#workspace=@goatjs/rimraf',
  '@goatjs/typescript-config': 'github:Pnlvfx/typescript-config',
  '@goatjs/updater': 'github:Pnlvfx/goatjs#workspace=@goatjs/updater',
});
