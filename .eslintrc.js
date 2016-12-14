module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "globals": {
        "describe": true,
        "it": true,
        "expect": true
    },
    "rules": {
        "comma-dangle": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "valid-jsdoc": [
            "error", {
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "constructor": "class",
                    "return": "returns",
                    "virtual": "abstract"
                },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "object": "Object",
                    "String": "string"
                },
                "requireReturn": true,
                "requireReturnType": true,
                "matchDescription": ".+",
                "requireParamDescription": true,
                "requireReturnDescription": true
            }
        ],
        "valid-typeof": "error",
        "no-unexpected-multiline": "error",
        "accessor-pairs": "error",
        "block-scoped-var": "error",
        "complexity": "off",
        "consistent-return": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "dot-location": ["error", "property"],
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": [
            "error", {
                "exceptions": ["Object"]
            }
        ],
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": [
            "error", {
                "boolean": true,
                "number": true,
                "string": true
            }
        ],
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "off",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-native-reassign": [
            "error", {
                "exceptions": ["Object"]
            }
        ],
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": [
            "error", {
                "props": false
            }
        ],
        "no-process-env": "off",
        "no-proto": "error",
        "no-redeclare": [
            "error", {
                "builtinGlobals": true
            }
        ],
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "off",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-with": "error",
        "radix": "error",
        "vars-on-top": "error",
        "wrap-iife": ["error", "outside"],
        "yoda": [
            "error", "never", {
                "exceptRange": true,
                "onlyEquality": true
            }
        ],
// Strict Mode
        "strict": "off",
// Variables
        "init-declarations": "off",
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-shadow-restricted-names": "off",
        "no-shadow": "off",
        "no-undef-init": "off",
        "no-undef": "error",
        "no-undefined": "error",
        "no-unused-vars": [
            "error", {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-use-before-define": "off",
        "array-bracket-spacing": ["error", "never"],
        "brace-style": [
            "error", "stroustrup", {
                "allowSingleLine": false
            }
        ],
        "camelcase": [
            "error", {
                "properties": "always"
            }
        ],
        "comma-spacing": [
            "error", {
                "before": false,
                "after": true
            }
        ],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error", "me"],
        "eol-last": "error",
        "func-names": "off",
        "func-style": ["error", "expression"],
        "id-length": "off",
        "id-match": "off",
        "indent": [
            "error", 4, {
                "SwitchCase": 1
            }
        ],
        "keyword-spacing": "error",
        "key-spacing": [
            "error", {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "lines-around-comment": [
            "error", {
                "beforeBlockComment": true,
                "afterBlockComment": false,
                "beforeLineComment": false,
                "afterLineComment": false,
                "allowBlockStart": true,
                "allowBlockEnd": false
            }
        ],
        "linebreak-style": "off",
        "max-nested-callbacks": "off",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": ["error", "always"],
        "no-array-constructor": "error",
        "no-continue": "off",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": [
            "error", {
                "max": 1
            }
        ],
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-spaced-func": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "object-curly-spacing": ["error", "always"],
        "one-var": [
            "error", {
                "var": "always",
                "let": "always"
            }
        ],
        "operator-assignment": ["error", "always"],
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double"],
        "require-jsdoc": [
            "error", {
                "require": {
                    "MethodDefinition": false,
                    "ClassDeclaration": false
                }
            }
        ],
        "semi-spacing": [
            "error", {
                "before": false,
                "after": true
            }
        ],
        "semi": ["error", "always"],
        "sort-vars": "off",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": [
            "error", {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": [
            "error", {
                "int32Hint": false
            }
        ],
        "space-unary-ops": [
            "error", {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": "error",
        "wrap-regex": "off",
        "arrow-parens": "error",
        "arrow-spacing": [
            "error", {
                "before": true,
                "after": true
            }
        ],
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-this-before-super": "off",
        "no-var": "error",
        "object-shorthand": ["error", "methods"],
        "prefer-const": "off",
        "prefer-spread": "off",
        "prefer-reflect": "off",
        "require-yield": "off"
    }
};