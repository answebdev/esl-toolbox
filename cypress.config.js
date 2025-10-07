// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register the custom task
      on('task', {
        logToTerminal(message) {
          console.log(message); // Log the message to the terminal
          return null; // Return null because tasks must return a value
        },
      });
    },
  },
};
