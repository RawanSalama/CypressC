import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
let publish =
  "BUTTON.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-disableElevation[tabindex='0'][type='button']:nth-child(2) > span.MuiButton-label";
const users = require("./users");
Given("The user visits Userpilot Website", () => {
  cy.visit("https://nxtg-dev.userpilot.io/users");
});
When("The user enters username and password", () => {
  const { email, password } = users;
  cy.get("#email").type(email);
  cy.get("#password").type(password);
});

When("The user clicks the sign in button", () => {
  cy.contains("Continue with Email").click();
  cy.wait(10000);
});
When("The user clicks on User Feedback", () => {
  cy.contains("User Feedback").click();
});
When("The user creates new survey and select template", () => {
  cy.contains("Surveys").click();
  cy.contains("Create Survey").click();
  cy.contains("Feature Research Survey").scrollIntoView().trigger("mouseover");
  cy.contains("Use Template").click({ force: true });
  cy.wait(10000);
});
When("The user clicks on publish", () => {
  cy.contains("Publish").click();
});
Then("The user must recieved successful message", () => {
  cy.get(publish).click();
  cy.contains("Survey published successfully").should("exist");
});
