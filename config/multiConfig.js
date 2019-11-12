exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  baseUrl: "http://ec2-3-134-107-30.us-east-2.compute.amazonaws.com",

  multiCapabilities: [
    {
      browserName: "chrome",
      shardTestFiles: true,
      maxInstances: 2
    },
    {
      browserName: "firefox",
      shardTestFiles: true,
      maxInstances: 2
    }
  ],

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  onPrepare: function() {
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};