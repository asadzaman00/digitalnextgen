Feature: To login in MTB

    @LoginScenario
    Scenario: Login to MTB with valid cred
      Given I am on home page with title "DigitalNextGen Test app"
      When I type userId "asadzaman"
      When I type password "test12345"
      When I click Login
      Then Verify I am logged in

    @LoginScenario
    Scenario: Login to MTB with invalid cred
      Given I am on home page with title "DigitalNextGen Test app"
      When I type userId "invaliduser"
      When I type password "invalidpass"
      When I click Login
      Then Verify I am not logged in
