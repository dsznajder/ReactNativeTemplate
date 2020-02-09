module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.native.js',
          '.ts',
          '.tsx',
        ],
      },
    },
  },

  plugins: ['sort-imports-es6-autofix'],
  extends: ['satya164', 'plugin:react-native/all'],

  rules: {
    'babel/no-unused-expressions': 'off',
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-sort-props': ['error'],
    'flowtype/no-types-missing-file-annotation': 'off',

    'import/no-unresolved': [
      'error',
      { caseSensitive: false, ignore: ['^~/'] },
    ],

    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'typescript',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic',
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
  },
  globals: {
    __DEV__: true,
    jasmine: true,
  },
};
