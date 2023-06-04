Feature: Go to userpilot

    Background:
        Given The user visits Userpilot Website
        When The users enters username and password
        And The user clicks the sign in button

    Scenario: Verify that specific user exist in the page dashboard
        When The user clicks opn Growth Insights
        And The user clicks on Pages dashboard and scroll down
        And User clicks on "Campfire" page
        Then User which called "demo@gmail.com" exists

