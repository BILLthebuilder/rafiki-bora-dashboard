module.exports = {
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
  // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],
    // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],
  },
  overrides: [
    // Add this rules, if you use inline templates inside *.component.ts files
    {
          files: ['*.ts'],
          extends: [
              'airbnb-typescript/base',
              // Settings for Prettier
              'prettier/@typescript-eslint',
              'plugin:prettier/recommended',
        ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
          },
      //Custom rles
          rules: {
              "no-console": "off",
              "no-underscore-dangle": "off",
              "no-return-assign": "off",
              "consistent-return": "off",
              "no-use-before-define": "off",
              "no-param-reassign": "off",
              //"camelcase": "off",
              "no-self-assign": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "import/no-extraneous-dependencies": "off",
            "import/prefer-default-export": "off",
            '@typescript-eslint/lines-between-class-members': 'off',
            "@typescript-eslint/no-useless-constructor": "off",
            "class-methods-use-this": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-redeclare": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-shadow": "off",
            "func-names": "off",
            "import/newline-after-import": "warn",   
              "prettier/prettier": [
                  "warn",
                  {
                      "endOfLine": "auto"
                  }
              ]
          },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
  ],
};
