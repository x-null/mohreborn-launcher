module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    parserOptions: {
        "parser": "@typescript-eslint/parser"
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    },
    overrides: [
        // Fix no-used-vars when importing ts types in .vue files
        {
            files: ['*.vue'],
            rules: {
                'no-unused-vars': 'off',
                //'@typescript-eslint/no-unused-vars': 'error'
            }
        }
    ]
}