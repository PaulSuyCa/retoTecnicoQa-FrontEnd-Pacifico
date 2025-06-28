const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'XX',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11'
    }
  }
});
