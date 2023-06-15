module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  'ignorePatterns': [
    '.eslintrc.js',
    'babel.config.js',
    'jest.config.js'
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
