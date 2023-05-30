import {
  When,
  Then,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
const users = require("./users");
Given("Visit Userpilot website", () => {
  cy.visit("https://nxtg-dev-feature-reports.userpilot.io");
});
When("Enter username and password", () => {
  const { email, password } = users;

  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When("Click into sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(10000);
});
Then("Verify the url of the cuurrent page", () => {
  cy.url().should("include", "/users");
});
