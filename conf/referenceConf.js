exports.config = {
 
  seleniumServerJar: null,
  
  seleniumPort: null,
 
  seleniumArgs: [],
  
  chromeDriver: './selenium/chromedriver',

  seleniumAddress: null,

  sauceUser: null,
  sauceKey: null,
  
  sauceSeleniumAddress: null,

  directConnect: false,
  
  firefoxPath: null,

  specs: [
    'spec/*_spec.js',
  ],

  exclude: [],

  suites: {
    smoke: 'spec/smoketests/*.js',
    full: 'spec/*.js'
  },

  capabilities: {
    browserName: 'chrome',

    count: 1,

    shardTestFiles: false,

    maxInstances: 1,

    specs: ['spec/chromeOnlySpec.js'],

    exclude: ['spec/doNotRunInChromeSpec.js']

  },
.
  multiCapabilities: [],

  maxSessions: -1,

  baseUrl: 'http://localhost:9876',

  allScriptsTimeout: 11000,

  getPageTimeout: 10000,

  beforeLaunch: function() {

  },

  onPrepare: function() {

  },

  onComplete: function() {

  },

  onCleanUp: function(exitCode) {},

  afterLaunch: function() {},

  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  },

  resultJsonOutputFile: null,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  },

  cucumberOpts: {
    require: 'cucumber/stepDefinitions.js',
    tags: '@dev',
    format: 'summary'
  }
};