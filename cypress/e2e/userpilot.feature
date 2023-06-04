Feature: Go to userpilot

    Background:
        Given The user visits Userpilot Website

    Scenario: login
        When The users enters username and password
        And The user clicks the sign in button
        Then Verify the url of the current page includes "/users"
