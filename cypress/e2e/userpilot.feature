Feature: Create a survey

    Background:
        Given The user visits Userpilot Website
        When The user enters username and password
        And The user clicks the sign in button

    Scenario: Verify that user can create a survey
        When The user clicks on User Feedback
        And The user creates new survey and select template
        And The user clicks on publish
        Then The user must recieved successful message

