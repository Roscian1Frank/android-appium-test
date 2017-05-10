@calculator
Feature: Testing calculator app

  @sum
  Scenario: checking sum is correct or not
    Given I am on calculator app
    When I am doing "addition" of two number
    Then I am checking "addition" result is correct

  @sub
  Scenario: checking subtraction is correct or not
    Given I am on calculator app
    When I am doing "subtraction" of two number
    Then I am checking "subtraction" result is correct

  @mul
  Scenario: checking multiplication is correct or not
    Given I am on calculator app
    When I am doing "multiplication" of two number
    Then I am checking "multiplication" result is correct

  @div
  Scenario: checking division is correct or not
    Given I am on calculator app
    When I am doing "division" of two number
    Then I am checking "division" result is correct

  @exampleTable
  Scenario Outline: checking division is correct or not
    Given I am on calculator app
    When I am doing "<calculation>" of two number
    Then I am checking "<calculation>" result is correct

    Examples:
      | calculation    |
      | addition       |
      | subtraction    |
      | multiplication |
      | division       |