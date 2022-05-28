module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'airbnb', // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
    // 'plugin:@typescript-eslint/recommended', // Optional enable, will more stricter
    'plugin:import/typescript', // Use prettier/react to pretty react syntax
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  env: {
    browser: true, // enable all browser global variables
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'promise'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'no-useless-constructor': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
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
    'import/prefer-default-export': 'off',
    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use 'type'
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    '@typescript-eslint/indent': 'off', // avoid conflict with airbn
  },
}
