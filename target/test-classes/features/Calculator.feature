@calculator
Feature: Testing calculator app

  @sum
  Scenario: checking sum calculation is correct or not
    Given I am on calculator app
    When I am entering input to the calculator
    Then I am checking "sum" result is correct

  @sub
  Scenario: checking subtraction  is correct or not
    Given I am on calculator app
    When I am entering input to the calculator
    Then I am checking "sub" result is correct

