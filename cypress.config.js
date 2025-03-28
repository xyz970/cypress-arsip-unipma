const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://arsip-unipma.my.id/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
