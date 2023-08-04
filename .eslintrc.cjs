module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":[
            "./tsconfig.json"
        ],
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
   
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/consistent-type-imports": "off"

    }
}
