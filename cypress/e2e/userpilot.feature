Feature: Go to userpilot

    Background:
        Given Visit Userpilot website

    Scenario: login
        When Enter username and password
        When Click into sign in button
        Then Verify the url of the cuurrent page
#And the user is on users dashboard


