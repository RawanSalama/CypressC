import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const users = require("./users");
Given("The user visits Userpilot Website", () => {
  cy.visit("https://run.userpilot.io");
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
When("The user clicks opn Growth Insights", () => {
  cy.contains("Growth Insights").click();
});
When("The user clicks on Pages dashboard and scroll down", () => {
  cy.contains("Pages").click();
  cy.get("#table-container-id").scrollIntoView();
});
When("User clicks on {string} page", (pageName) => {
  cy.contains(pageName).click();
  cy.get("#table-container-id").scrollIntoView();
});
Then("User which called {string} exists", (name) => {
  cy.contains(name).should("exist");
});
