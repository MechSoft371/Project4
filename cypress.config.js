const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl" : 'https://opensource-demo.orangehrmlive.com/',
    'defaultCommandTimeout' : 100000,
    'pageLoadTimeout' : 120000,
    retries : {openMode: 1},
    'video': true,
    //'viewportHeight': 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.{js,cy.js}',
  },
});
