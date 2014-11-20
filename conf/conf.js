var env = require('../env/env.js');
exports.config = {
  seleniumAddress: env.seleniumAddress,

  // Spec patterns are relative to the location of this config.
  specs: ['../tests/*_spec.js'],

  baseUrl: env.baseUrl,

  // Patterns to exclude.
  exclude: [],

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will run.
  // e.g. protractor conf.js --suite=pageObject
  suites: {
    pageObject: '../tests/po_spec.js',
    example: '../tests/example_spec.js'
  },

  capabilities: env.capabilities,

    jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    showTiming: true,
    defaultTimeoutInterval: 100000
  }

  
};