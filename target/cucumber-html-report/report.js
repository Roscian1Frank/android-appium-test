$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculator.feature");
formatter.feature({
  "line": 2,
  "name": "Testing calculator app",
  "description": "",
  "id": "testing-calculator-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calculator"
    }
  ]
});
formatter.before({
  "duration": 16635244731,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Checking all the button are working",
  "description": "",
  "id": "testing-calculator-app;checking-all-the-button-are-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@buttons"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on each button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check input on calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on each button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "calculator clear out the numbers",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 272495164,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iClickOnEachButton()"
});
formatter.result({
  "duration": 7484008130,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iCheckInputOnCalculator()"
});
formatter.result({
  "duration": 591413039,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iClickOnEachButton()"
});
formatter.result({
  "duration": 7507149638,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iClickClearButton()"
});
formatter.result({
  "duration": 710698925,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.calculatorClearOutTheNumbers()"
});
formatter.result({
  "duration": 549839440,
  "status": "passed"
});
formatter.after({
  "duration": 3332578189,
  "status": "passed"
});
});