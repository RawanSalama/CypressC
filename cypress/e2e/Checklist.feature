Feature: Testing Checklists

    Background:
        Given The user visits Userpilot
        When Add username and password
        And Clicks the sign in button

    Scenario: Verify that user can Add Tasks to a Checklist
        When Clicks on Engagement
        And The User creates new Checklist
        And User Adds tasks
        And Publish checklist
        And The user goes to settings
        When The user changes on the settings
        And Status for pending changes should appear


