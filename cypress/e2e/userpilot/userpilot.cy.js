import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const users = require("./users");
Given("The user visits Userpilot Website", () => {
  cy.visit("https://nxtg-dev-feature-reports.userpilot.io");
});
When("The users enters username and password", () => {
  const { email, password } = users;

  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When("The user clicks the sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(10000);
});
Then("Verify the url of the current page includes {string}", (Url) => {
  cy.url().should("include", Url);
});
