Feature: Testing Flow

    Background:
        Given The user visits Userpilot Website
        When The user enters username and password
        And The user clicks the sign in button

    Scenario: Verify that user can create a flow
        When The user clicks on Engagement
        And The User creates new flow
