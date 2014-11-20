exports.config = {
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: ['../tests/*_spec.js'],

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

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    browserName: 'chrome',
    'appium-version': '1.2.4.1',
    platformName: 'Android',
    platformVersion: '4.3',
    deviceName: 'S3',
  },

    jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    showTiming: true,
    defaultTimeoutInterval: 100000
  }

  
};