Feature: Interaction with TechGlobal HTML Elements page

  Scenario: Validate HTML elements page Register and Sign in Buttons
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see "HTML Elements" page heading
    Then the URL should contain "elements"
    When user clicks on the "Register" button
    Then the text undet it should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text undet it should be "You clicked on “Sign in”"

  Scenario: Validate HTML Elements page, Interact with Dropdowns
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see "HTML Elements" page heading
    Then the URL should contain "elements"

    When user selects "Apple" from the "first" dropdown menu
    And user selects "Microsoft" from the "second" dropdown menu

    Then "Apple" should be the selected option in the "first" dropdown
    And "Microsoft" should be the selected option in the "second" dropdown


  Scenario: data table example test
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see "HTML Elements" page heading
    And validate the texts on the ordered list
      # | Cypress | Playwright | Selenium Webdriver |
      | Tool1 | Cypress            |
      | Tool2 | Playwright         |
      | Tool3 | Selenium Webdriver |
