const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://automationexercise.com",
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: 1,
    defaultCommandTimeout: 10000
  },
})
