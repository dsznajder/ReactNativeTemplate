module.exports = {
  plugins: ['sort-imports-es6-autofix'],
  extends: ['satya164'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.js', '.android.tsx', '.ios.tsx', '.native.js'],
      },
    },
  },
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'import/no-unresolved': ['error', { caseSensitive: true, ignore: ['^~/'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          'parent',
          'index',
          'sibling',
        ],
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
