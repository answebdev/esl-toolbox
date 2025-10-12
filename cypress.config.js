// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensures Cypress finds your tests
    setupNodeEvents(on, config) {
      // Register the custom task
      on('task', {
        logToTerminal(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
