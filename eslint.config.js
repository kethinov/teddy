import mocha from 'eslint-plugin-mocha'

export default [
  {
    plugins: {
      mocha
    },
    // the eslint-disable comments in the test files target rules that standard
    // enables, not the single rule below, so this pass would report all of them
    // as unused
    linterOptions: {
      reportUnusedDisableDirectives: 'off'
    },
    rules: {
      'mocha/no-exclusive-tests': 'error'
    }
  }
]
