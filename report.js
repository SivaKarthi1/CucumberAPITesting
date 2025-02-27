const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: './reports/cucumber_report.html',
    reportSuiteScenarios: true,
    launchReport: false,
};

reporter.generate(options);