/**
 * Currently there is no coverage with e2e but it has been implemented - track it down!
 * see: https://github.com/karma-runner/karma/issues/347
 */

// base path, that will be used to resolve files and exclude
basePath = '../../';

// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

preprocessors = {
  'js/**/*.js': 'coverage'
};

reporters = ['coverage'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];

// cli runner port
runnerPort = 9102;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
//browsers = ['PhantomJS', 'Chrome'];
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

proxies = {
  '/': 'http://localhost:9999/'
};

urlRoot = "__karma__";

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};