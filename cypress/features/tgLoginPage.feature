Feature: Login Feature

  # Scenario: Validate Login Form
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see "Login Function" page heading
  #   When user enter username as "johndoe" and password as "123456"
  #   And user clicks Login button
  #   Then user should see a "Invalid Username entered!"

  # Scenario: Validate Login Form 2
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see "Login Function" page heading
  #   When user enter username as "tom" and password as "12345"
  #   And user clicks Login button
  #   Then user should see a "Invalid Username entered!"

  # Scenario: Validate Login Form 3
  #   Given user navigates to "https://techglobal-training.com/frontend"
  #   When user clicks on the "Login Function" card
  #   Then user should see "Login Function" page heading
  #   When user enter username as "TechGlobal" and password as "Test1234"
  #   And user clicks Login button
  #   Then user should see a "You are logged in"


  Scenario Outline: "<testcase>"
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "Login Function" card
    Then user should see "Login Function" page heading
    When user enter username as "<username>" and password as "<password>"
    And user clicks Login button
    Then user should see a "<message>"
    Examples:
      | username   | password | message                   | testcase    |
      | johndoe    | 123456   | Invalid Username entered! | Test Case 1 |
      | tom        | 12345    | Invalid Username entered! | Test Case 2 |
      | TechGlobal | Test1234 | You are logged in         | Test Case 3 |