const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    failOnStatusCode: false,
    redirectionLimit: 120,
    baseUrl: "http://arsip-unipma.my.id/",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
