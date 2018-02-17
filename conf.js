var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: '/Users/Tanaybhatt/node_modules/protractor/example/QC3/screenshots',
  filename: 'QC3 UT report.html',
  // captureOnlyFailedSpecs: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: true

});


exports.config = {
  directConnect: true,
   // your config here ...
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['addquesforform.js'],


  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
      onComplete: null,
      isVerbose: false,
      showColors: true,
      includeStackTrace: true
  }
};
