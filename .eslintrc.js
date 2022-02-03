module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    node: {
      resolvePaths: [__dirname],
      tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
    },
  },
  plugins: ['jest', 'import', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier', // 'prettier' needs to be last in the list to turn off conflict rules with ESLint (https://prettier.io/docs/en/integrating-with-linters.html)
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'], // PascalCase is allowed for aws-sdk or Enum like const
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'], // PascalCase is allowed for aws-sdk
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'], // PascalCase is allowed for aws-sdk
      },
      {
        selector: 'classProperty',
        format: ['camelCase', 'PascalCase'], // PascalCase is allowed for aws-sdk
        leadingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'], // PascalCase is allowed for aws-sdk, UPPER_CASE is allowed for ENVIRONMENT_VARIABLES
        leadingUnderscore: 'allow',
      },
      {
        selector: 'method',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
    ],
  },
};
