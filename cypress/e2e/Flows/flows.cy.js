import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
const users = require("../users");
Given("The user visits Userpilot Website", () => {
  cy.visit("https://nxtg-dev.userpilot.io");
});
When("The user enters username and password", () => {
  const { email, password } = users;
  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When("The user clicks the sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(1000);
});
When("The user clicks on Engagement", () => {
  cy.contains("Engagement").click();
  cy.contains("Flows").click();
  cy.wait(10000);
});
When("The User creates new flow", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.contains("Create Flow").click();
  cy.get('input[name="flow_build_url"]').type(
    "https://campfire-rawan-report1.userpilot.io/dashboard/",
    {
      timeout: 1000,
    }
  );
  cy.get(".MuiDialogActions-root").children("button:last-child").click();
  cy.contains("Create").click();
  cy.wait(1000);
});
