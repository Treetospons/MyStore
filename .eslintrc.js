module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  extends: ['@react-native'],
  rules: {
    'react/jsx-no-bind': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-raw-text': 'warn',
    'react-native/no-color-literals': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
