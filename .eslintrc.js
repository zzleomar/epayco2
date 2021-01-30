module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'import/order': 'off',
    'no-plusplus': 'off', // use operator ++
    'no-console': 'off', // use  console.log
    'no-await-in-loop': 'off', // use await in cicle for
    'no-param-reassign': 'off', // change variable in funtions
    'no-restricted-globals': 'off', // use variables js globals of navegator
    'import/no-unresolved': 'off', // use operator @ for import
    radix: 'off' // use for convert String in Interger
  }
}
