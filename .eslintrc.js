module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: ["error", "double", { "allowTemplateLiterals": true }],
        "no-empty": "warn",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "no-empty-function": "warn",
        "no-mixed-operators": "error",
        "no-mixed-requires": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": true
            }
        ],
        "no-useless-call": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "semi": [2, "always"],
        "no-unused-vars": "error",
        "no-use-before-define": [0],
        "react/react-in-jsx-scope": "off"
    }
};
