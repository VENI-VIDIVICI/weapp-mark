module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "wx": "readonly",
        "App": "readonly",
        "Page": "readonly",
        "Component": "readonly",
        "getApp": "readonly",
        "getCurrentPages": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": ["error", { "args": "none" }],
        "comma-dangle": ["error", "only-multiline"]
    }
};