module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // GENERAL
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-empty": ["warn", { "allowEmptyCatch": true }],

        // TYPESCRIPT-SPECIFIC
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/explicit-function-return-type": ["warn"],
        "@typescript-eslint/explicit-module-boundary-types": ["warn"],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/no-inferrable-types": "off",

        // OPTIONAL (more opinionated)
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                "delimiter": "semi",
                "requireLast": false
                }
            }
        ]
    }
}