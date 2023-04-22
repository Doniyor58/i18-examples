module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    'global-require': 'off',
    'operator-linebreak': ["error", "after"],
    'no-param-reassign': ['error', { props: false }],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-trailing-spaces': 'off',

    'implicit-arrow-linebreak': 'off',
    'linebreak-style': [2, 'unix'],
    'max-len': [2, { code: 120 }],
    'newline-before-return': 'warn',

    'object-curly-newline': ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 3 },
      "ObjectPattern": { "multiline": true, "minProperties": 3 },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'react/jsx-uses-react': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],

    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
