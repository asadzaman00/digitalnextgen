const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const reporter = require("cucumber-html-reporter");
const report = require("cucumber-html-report");
const htmlReports = process.cwd() + "/reports/html";
const targetJson = process.cwd() + "/reports/json/cucumber_report.json";

const cucumberReportOptions = {
  source: targetJson,
  dest: htmlReports,
  name: "web_ui_test_report.html",
  title: "Digital Next Gen Test Report"
};
const cucumberReporteroptions = {
  name: "web_ui_test_report.html",
  title: "Digital Next Gen Test Report",
  theme: "bootstrap",
  jsonFile: targetJson,
  output: htmlReports + "/web_ui_test_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true
};

class Reporter {

  static createDirectory(dirName) {
    //Check if the directory exist
    if (!fs.existsSync(dirName)) {
      mkdirp.sync(dirName);
    }
    }

  static createHTMLReport() {

    try {
      reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
      report
        .create(cucumberReportOptions)
        .then(function() {
          console.log("cucumber_report.html created successfully!");
        })
        .catch(function(err) {
          if (err) {
            console.error(err);
          }
        });
    } catch (err) {
      if (err) {
        console.log("Failed to save cucumber test results to json file.");
        console.log(err);
      }
    }
  }
}
module.exports = Reporter;