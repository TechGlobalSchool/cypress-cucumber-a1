Feature: Google Test

  Scenario: Google Search
    Given user navigates to "https://www.google.com"
    When user search for "Tesla"
    Then user should see "Tesla" in the URL
    And user should see "Tesla" in the title


