describe('Check website for broken links', () => {
  it('should log broken links for grammar.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('grammar.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile('cypress/results/Grammar_brokenLinks.txt', summaryMessage);

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for listening.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('listening.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile('cypress/results/Listening_brokenLinks.txt', summaryMessage);

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for reading.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('reading.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile('cypress/results/Reading_brokenLinks.txt', summaryMessage);

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for other.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('other.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile(
        'cypress/results/OtherTopics_brokenLinks.txt',
        summaryMessage,
      );

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for test-prep.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('test-prep.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile('cypress/results/TestPrep_brokenLinks.txt', summaryMessage);

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for vocabulary.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('vocabulary.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile(
        'cypress/results/Vocabulary_brokenLinks.txt',
        summaryMessage,
      );

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });

  it('should log broken links for writing.html', () => {
    const brokenLinks = []; // Initialize an array to collect broken links

    cy.visit('writing.html'); // File name to be tested

    cy.get('a').each(($el) => {
      const link = $el.attr('href');

      // Skip non-HTTP links (e.g., mailto, anchors)
      if (!link || link.startsWith('mailto:') || link.startsWith('#')) {
        return;
      }

      // Make the GET request and handle the timeout for each link
      cy.request({
        url: link,
        failOnStatusCode: false, // Prevent Cypress from failing the test immediately on non-2xx responses
        timeout: 60000, // Timeout of 60 seconds
      }).then((response) => {
        // Skip if the response is a redirect (3xx)
        if (response.status >= 300 && response.status < 400) {
          cy.log(`Redirect detected: ${link} (Status: ${response.status})`);
          return;
        }

        // Flag only 404 and 5xx errors as broken
        if (response.status === 404 || response.status >= 500) {
          // If broken, push to the brokenLinks array
          brokenLinks.push(link);
        }
      });
    });

    // After all links are checked, log the results to a text file
    cy.then(() => {
      const summaryMessage =
        brokenLinks.length === 0
          ? 'No broken links detected.'
          : `Broken links detected:\n${brokenLinks.join(', \n')}`;

      // Write the summary message to a file
      cy.writeFile('cypress/results/Writing_brokenLinks.txt', summaryMessage);

      // Use cy.task to log the results to the terminal
      if (Cypress.env('CI')) {
        // Log to the terminal if running in CI
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          cy.task('logToTerminal', 'No broken links found.');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      } else {
        // Log directly to the terminal if running locally
        cy.task('logToTerminal', summaryMessage);
        if (brokenLinks.length === 0) {
          // Use empty string ('') as second argument instead of 'No broken links found'
          // to avoid duplicate messages.
          cy.task('logToTerminal', '');
        } else {
          brokenLinks.forEach((link) => {
            // Use empty string ('') as second argument instead of 'link' variable
            // to avoid duplicate links
            cy.task('logToTerminal', '');
          });
        }
      }
    });
  });
});
