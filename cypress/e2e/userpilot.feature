Feature: Go to userpilot

    Background:
        Given The user visits Userpilot Website
        When The user enters username and password
        And The user clicks the sign in button

    Scenario: Verify that specific user exist in the page dashboard
        When The user clicks on Growth Insights
        And The user clicks on Pages dashboard and scrolls down
        And The user clicks on "Campfire" page
        Then The user which called "demo@gmail.com" should exists

