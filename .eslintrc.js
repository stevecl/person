// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    node: true
  },
  // 消除no-undef影响
  globals: {
    document: true,
    localStorage: true,
    window: true,
    Bus: true,
    utils: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  // required to lint *.vue files
  plugins: [],
  // add your custom rules here
  // 0或’off’：关闭规则。 
  // 1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。 
  // 2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    "semi": 0,
    "prefer-promise-reject-errors": 0,
    "no-tabs": 0
  }
}