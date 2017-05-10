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
  "duration": 16647307587,
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
  "name": "I click clear button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "calculator clear out the numbers",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 303323760,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iClickOnEachButton()"
});
formatter.result({
  "duration": 7579862887,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iCheckInputOnCalculator()"
});
formatter.result({
  "duration": 579365072,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.iClickClearButton()"
});
formatter.result({
  "duration": 211913747,
  "status": "passed"
});
formatter.match({
  "location": "Calculator_step.calculatorClearOutTheNumbers()"
});
formatter.result({
  "duration": 560516166,
  "status": "passed"
});
formatter.after({
  "duration": 3325759560,
  "status": "passed"
});
formatter.before({
  "duration": 16186220518,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "checking sum is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-sum-is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sum"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I am doing \"addition\" of two number",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I am checking \"addition\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 314913624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2361890771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 540960474,
  "status": "passed"
});
formatter.after({
  "duration": 3182476144,
  "status": "passed"
});
formatter.before({
  "duration": 16086693078,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "checking subtraction is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-subtraction-is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@sub"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I am doing \"subtraction\" of two number",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am checking \"subtraction\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 303174333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subtraction",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2383722046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subtraction",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 563344405,
  "status": "passed"
});
formatter.after({
  "duration": 3212202124,
  "status": "passed"
});
formatter.before({
  "duration": 16832535211,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "checking multiplication is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-multiplication-is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@mul"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I am doing \"multiplication\" of two number",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I am checking \"multiplication\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 278496965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiplication",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2366027847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiplication",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 602083861,
  "status": "passed"
});
formatter.after({
  "duration": 3199032279,
  "status": "passed"
});
formatter.before({
  "duration": 16697578672,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@div"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am doing \"division\" of two number",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I am checking \"division\" result is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 307513265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "division",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2360838731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "division",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 556811049,
  "status": "passed"
});
formatter.after({
  "duration": 3176398237,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@exampleTable"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I am doing \"\u003ccalculation\u003e\" of two number",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am checking \"\u003ccalculation\u003e\" result is correct",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not;",
  "rows": [
    {
      "cells": [
        "calculation"
      ],
      "line": 43,
      "id": "testing-calculator-app;checking-division-is-correct-or-not;;1"
    },
    {
      "cells": [
        "addition"
      ],
      "line": 44,
      "id": "testing-calculator-app;checking-division-is-correct-or-not;;2"
    },
    {
      "cells": [
        "subtraction"
      ],
      "line": 45,
      "id": "testing-calculator-app;checking-division-is-correct-or-not;;3"
    },
    {
      "cells": [
        "multiplication"
      ],
      "line": 46,
      "id": "testing-calculator-app;checking-division-is-correct-or-not;;4"
    },
    {
      "cells": [
        "division"
      ],
      "line": 47,
      "id": "testing-calculator-app;checking-division-is-correct-or-not;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16535223846,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calculator"
    },
    {
      "line": 36,
      "name": "@exampleTable"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I am doing \"addition\" of two number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am checking \"addition\" result is correct",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 284368275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2346717247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 583414579,
  "status": "passed"
});
formatter.after({
  "duration": 3168031597,
  "status": "passed"
});
formatter.before({
  "duration": 16367588506,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calculator"
    },
    {
      "line": 36,
      "name": "@exampleTable"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I am doing \"subtraction\" of two number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am checking \"subtraction\" result is correct",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 324391963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subtraction",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2360415121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subtraction",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 601028265,
  "status": "passed"
});
formatter.after({
  "duration": 3116366658,
  "status": "passed"
});
formatter.before({
  "duration": 16251791710,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calculator"
    },
    {
      "line": 36,
      "name": "@exampleTable"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I am doing \"multiplication\" of two number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am checking \"multiplication\" result is correct",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 357885573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiplication",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2391043936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiplication",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 582765505,
  "status": "passed"
});
formatter.after({
  "duration": 3200280509,
  "status": "passed"
});
formatter.before({
  "duration": 16193531036,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "checking division is correct or not",
  "description": "",
  "id": "testing-calculator-app;checking-division-is-correct-or-not;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calculator"
    },
    {
      "line": 36,
      "name": "@exampleTable"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on calculator app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I am doing \"division\" of two number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I am checking \"division\" result is correct",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calculator_step.iAmOnCalculatorApp()"
});
formatter.result({
  "duration": 272878115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "division",
      "offset": 12
    }
  ],
  "location": "Calculator_step.iAmDoingOfTwoNumber(String)"
});
formatter.result({
  "duration": 2377318311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "division",
      "offset": 15
    }
  ],
  "location": "Calculator_step.iAmCheckingResultIsCorrect(String)"
});
formatter.result({
  "duration": 592455836,
  "status": "passed"
});
formatter.after({
  "duration": 3129881387,
  "status": "passed"
});
});