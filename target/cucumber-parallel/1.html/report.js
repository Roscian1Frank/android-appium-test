$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculator.feature");
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
  "duration": 35135913942,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "checking sum calculation is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-sum-calculation-is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sum"
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
  "name": "I am entering input to the calculator",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am checking \"sum\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 292791375,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iAmEnteringInputToTheCalculator()"
});
formatter.result({
  "duration": 2470706437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sum",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 550445287,
  "status": "passed"
});
formatter.after({
  "duration": 3162915755,
  "status": "passed"
});
formatter.before({
  "duration": 12338200998,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "checking subtraction  is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-subtraction--is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sub"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am entering input to the calculator",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I am checking \"sub\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 278654916,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iAmEnteringInputToTheCalculator()"
});
formatter.result({
  "duration": 2270668449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 582117121,
  "status": "passed"
});
formatter.after({
  "duration": 3115688771,
  "status": "passed"
});
});