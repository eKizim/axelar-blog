module.exports = {
    env: {
        es6: true,
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/prop-types': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4]
    }
};
