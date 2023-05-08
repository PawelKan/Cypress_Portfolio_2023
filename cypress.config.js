const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      allureWriter(on, config);
            return config;
    },
    baseUrl : "https://automationexercise.com",
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: 0,
    defaultCommandTimeout: 10000,
    excludeSpecPattern : ['**/1-getting-started', '**/2-advanced-examples'],
    allure: true
  },
})
