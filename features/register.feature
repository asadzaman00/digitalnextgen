Feature: To Register in MTB

    @RegisterScenario
    Scenario: Register to MTB with valid data
      Given I am on register page
      When I type Firstname "Asad"
      And I type Lastname "Zaman"
      And I type username "asadzaman00"
      And I type password "test12345"
      When I click Register
      Then Verify registration successful
