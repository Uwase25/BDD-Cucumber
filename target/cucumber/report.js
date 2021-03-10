$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login Functionality different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "validate-techfios-login-functionality-different-way;login-different-way;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 15,
      "id": "validate-techfios-login-functionality-different-way;login-different-way;;2"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ],
      "line": 16,
      "id": "validate-techfios-login-functionality-different-way;login-different-way;;3"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 17,
      "id": "validate-techfios-login-functionality-different-way;login-different-way;;4"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc124"
      ],
      "line": 18,
      "id": "validate-techfios-login-functionality-different-way;login-different-way;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7175750900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 4669983700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 8004300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.after({
  "duration": 1140148000,
  "status": "passed"
});
formatter.before({
  "duration": 3403549300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 4516877700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo2@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 128500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.after({
  "duration": 3620124700,
  "status": "passed"
});
formatter.before({
  "duration": 3487082900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 4622250600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 134900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.after({
  "duration": 1019342200,
  "status": "passed"
});
formatter.before({
  "duration": 2924684300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 3471638500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login different way",
  "description": "",
  "id": "validate-techfios-login-functionality-different-way;login-different-way;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo2@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 591100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.after({
  "duration": 1054076100,
  "status": "passed"
});
});