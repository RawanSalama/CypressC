const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(`task`, {
    error(message) {
      throw new Error(message);
    },
    warn(message) {
      console.warn("\x1b[33m", "WARNING:", message, "\x1b[0m");
      return false;
    },
  });

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  video: true,
  projectId: "efshvw",
  nonGlobalStepDefinition: true,
  e2e: {
    specPattern: "cypress/e2e/*.feature",
    supportFile: false,
    taskTimeout: 1000,
    setupNodeEvents,
  },
});
