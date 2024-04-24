import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const users = require("../users");

let create = '[data-testid="create-checklist-button"]';
Given("The user visits Userpilot", () => {
  cy.visit("https://nxtg-dev-qa-unique-ids.userpilot.io");
});
When("Add username and password", () => {
  const { email, password } = users;
  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When("Clicks the sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(1000);
});
When("Clicks on Engagement", () => {
  cy.contains("Engagement").click();
  cy.contains("Checklist").click();
  cy.wait(10000);
});
When("The User creates new Checklist", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.get(create).click();
  cy.get('input[type="text"][name="label"]').type("Automated-Checklist", {
    timeout: 1000,
  });

  cy.get('[data-testid="confirm-create--checklist-button"]').click();
  cy.wait(1000);
});
When("User Adds tasks", () => {
  cy.get(".MuiTabs-flexContainer").contains("Tasks").should("exist");
  cy.contains("Add Task").click();

  cy.get('[data-testid="toggle-button-of-type"]')
    .contains("Go to a page")
    .click();
  cy.get('input[name="destination"][type="text"]').type("https://google.com");
});
When("User change the style", () => {
  cy.contains("Style").click();
});
When("Publish checklist", () => {
  cy.contains("Publish").click();
  cy.get(".MuiDialogActions-root")
    .children("button:last-child")
    .click({ timeout: 1000 });
  cy.get(".MuiChip-label").contains("Live").should("exist");
});

Then("The user goes to settings", () => {
  cy.contains("Settings").click();
});
When("The user changes on the settings", () => {
  cy.contains("Only-Manually").click();
});

Then("Status for pending changes should appear", () => {
  cy.get(".MuiChip-root").should(
    "have.css",
    "background-color",
    "rgb(227, 183, 9)"
  );
});
