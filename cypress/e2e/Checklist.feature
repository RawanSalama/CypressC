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

        # Scenario: Change the settings for checklist
        And the user goes to settings
# When the user change on the settings for the checklist
# Then Push updates status should appear

