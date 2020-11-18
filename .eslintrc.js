// const path = require('path');

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },

  settings: {
    'react-native/style-sheet-object-names': [
      'StyleSheet',
      'new DynamicStyleSheet',
    ],
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

  plugins: ['simple-import-sort', 'graphql'],
  extends: ['satya164', 'plugin:react-native/all'],

  rules: {
    'babel/no-unused-expressions': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/no-truthy-falsy': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-raw-text': ['error', { skip: ['Typography'] }],
    'react/no-unused-prop-types': 'off',

    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false,
        ignore: ['^(~|jest)/', 'react-native-reanimated'],
      },
    ],

    'jest/expect-expect': [
      'error',
      { assertFunctionNames: ['expect', 'element'] },
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
      { default: 'generic', readonly: 'generic' },
    ],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          ['^@?\\w'],
          // Things that start with `~/`.
          ['^~/'],
          ['^../'],
          ['^./'],
        ],
      },
    ],

    // 'graphql/template-strings': [
    //   'error',
    //   {
    //     env: 'apollo',
    //     schemaJsonFilepath: path.resolve(
    //       __dirname,
    //       'src/types/graphql.schema.json',
    //     ),
    //   },
    // ],
  },
  globals: {
    __DEV__: true,
    jasmine: true,
  },
};
