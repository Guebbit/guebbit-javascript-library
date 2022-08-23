// @ts-check
/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/cypress/'
  ],
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: compilerOptions.paths ? pathsToModuleNameMapper(compilerOptions.paths) : null
};

module.exports = options;
