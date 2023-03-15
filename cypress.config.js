const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://automationexercise.com",
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: 0,
    defaultCommandTimeout: 10000,
    excludeSpecPattern : ['**/1-getting-started', '**/2-advanced-examples'],
  },
})
