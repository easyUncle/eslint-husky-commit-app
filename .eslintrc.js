module.exports = {
  env: {
    browser: true,
    es6: true,
    node:true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
