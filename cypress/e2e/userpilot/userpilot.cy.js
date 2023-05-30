import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
Given("Visit Userpilot website", () => {
  cy.visit("https://nxtg-dev-feature-reports.userpilot.io");
});
When("Enter username and password", () => {
  cy.get("#email").type("rawan+report@userpilot.co");
  cy.get("#password").type("Aa1234567@");
});
Then("Click into sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(10000);
});
Then("Verify the url of the cuurrent page", () => {
  cy.url().should("include", "/users");
});
