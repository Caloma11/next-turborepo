module.exports = {
  env: {
    browser: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'prettier'
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error'
      }
    }
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-throw-literal': 'error',
    'no-console': 'error',
    'new-cap': 'error',
    eqeqeq: 'error',
    camelcase: 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'never']
  },
  ignorePatterns: ['public', 'node_modules', 'build', '.turbo', 'coverage']
};
