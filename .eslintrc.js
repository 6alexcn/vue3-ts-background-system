module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    onMounted: true,
    useRouter: true,
    useRoute: true,
    computed: true,
    onBeforeRouteUpdate: true,
    reactive: true,
    ref: true,
    onBeforeUnmount: true
  },
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: { 'vue/multi-word-component-names': 'off', endOfLine: 'auto' }
}
