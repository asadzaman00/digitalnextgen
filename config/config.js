const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "http://ec2-3-134-107-30.us-east-2.compute.amazonaws.com",
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "firefox"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/register.feature","../features/login.feature"],
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
