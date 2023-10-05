const { defineConfig } = require("cypress");
const zbrPlugin = require('@zebrunner/javascript-agent-cypress/lib/plugin');

module.exports = defineConfig({
  includeShadowDom : true,
  chromeWebSecurity : false,
  //retries : 2,

  //Zebrunner configuration
  reporter: '@zebrunner/javascript-agent-cypress',
  reporterOptions: {
    reportingServerHostname: 'https://solvdinternal.zebrunner.com',
    reportingServerAccessToken: 'mZL9TVq4PMbh1s0uq3oQxZ38m0Mpigz4gy8PM8OnzXA4tqKrI5',
    reportingProjectKey: 'ALPHA',
    reportingRunEnvironment: 'STAGE',
    reportingRunBuild: '1.0-alpha',
    reportingRunDisplayName: 'Cypress lb run',
    reportingRunLocale: 'en_US',
  },
  e2e: {
    setupNodeEvents(on, config) {
      zbrPlugin(on, config);
    },
  },
});
