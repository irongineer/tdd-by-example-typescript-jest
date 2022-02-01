import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/__tests__/**/*.*'],
};
export default config;
