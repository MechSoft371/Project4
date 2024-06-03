const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" : 'https://opensource-demo.orangehrmlive.com/',
    'defaultCommandTimeout' : 100000,
    'pageLoadTimeout' : 120000,
    retries : {openMode: 1},
    //'viewportHeight': 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,cy.js}',
  },
});
