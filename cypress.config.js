const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    redirectionLimit: 120,
    baseUrl: 'http://arsip-unipma.my.id/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
