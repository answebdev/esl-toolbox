const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Optional: if your site is hosted locally
    // baseUrl: 'http://localhost:5000',

    setupNodeEvents(on, config) {
      on('task', {
        logToTerminal(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js', // ⬅️ ensures test files are found
  },
});
