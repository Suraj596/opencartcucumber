$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Opencart.feature");
formatter.feature({
  "line": 1,
  "name": "Open Cart.com Application TestCases (End to End validation)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC001 Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 10,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;1"
    },
    {
      "cells": [
        "CreateAccount",
        "0"
      ],
      "line": 11,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6928489,
  "status": "passed"
});
formatter.before({
  "duration": 6851473941,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC001 Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"CreateAccount\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_open_link()"
});
formatter.result({
  "duration": 5782104499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateAccount",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 58
    }
  ],
  "location": "OpencartStepsTest.click_on_accountand_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 6764555032,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_submit()"
});
formatter.result({
  "duration": 2351547498,
  "status": "passed"
});
formatter.after({
  "duration": 283474,
  "status": "passed"
});
formatter.after({
  "duration": 1473523798,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "TC002 Register Account Failure",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User should nagivate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Register account should fail \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 20,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;1"
    },
    {
      "cells": [
        "Negativereg",
        "0"
      ],
      "line": 21,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8427967,
  "status": "passed"
});
formatter.before({
  "duration": 4088231686,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "TC002 Register Account Failure",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User should nagivate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Register account should fail \"Negativereg\" and \"0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.User_should_nagivate_to_url()"
});
formatter.result({
  "duration": 4705974698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Negativereg",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 53
    }
  ],
  "location": "OpencartStepsTest.user_Register_account_should_fail_and(String,int)"
});
formatter.result({
  "duration": 3348278752,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.Click_on_submit_button()"
});
formatter.result({
  "duration": 4058303703,
  "status": "passed"
});
formatter.after({
  "duration": 80643,
  "status": "passed"
});
formatter.after({
  "duration": 1365230970,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "TC003 \u0026 TC004 Testing Login Funcationality \u0026 Verify the Title",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 33,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 34,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4786307,
  "status": "passed"
});
formatter.before({
  "duration": 3760329319,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TC003 \u0026 TC004 Testing Login Funcationality \u0026 Verify the Title",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4513446185,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 92770198,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4305950260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 9120266661,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 15302205,
  "status": "passed"
});
formatter.after({
  "duration": 93840,
  "status": "passed"
});
formatter.after({
  "duration": 1298810144,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "TC005  IMAC Add to cart (Tab)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user mouseover to desktop and select mac",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 44,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 45,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2574724,
  "status": "passed"
});
formatter.before({
  "duration": 4317209055,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "TC005  IMAC Add to cart (Tab)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user mouseover to desktop and select mac",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4734010249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 2388970918,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 9206690957,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_mouseover_to_desktop_and_select_mac()"
});
formatter.result({
  "duration": 15132384186,
  "status": "passed"
});
formatter.after({
  "duration": 61582,
  "status": "passed"
});
formatter.after({
  "duration": 1392984514,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "TC006 Order Placement with guest checkout",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "checkout with Guest details from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 54,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;1"
    },
    {
      "cells": [
        "GuestDetails",
        "0"
      ],
      "line": 55,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1904161,
  "status": "passed"
});
formatter.before({
  "duration": 4610819410,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "TC006 Order Placement with guest checkout",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "checkout with Guest details from given sheetname \"GuestDetails\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4614266060,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 24226092290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GuestDetails",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 78
    }
  ],
  "location": "OpencartStepsTest.checkout_with_Guest_details_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 35404224248,
  "status": "passed"
});
formatter.after({
  "duration": 89930,
  "status": "passed"
});
formatter.after({
  "duration": 1509016175,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "TC007 Order Placement with Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "user enters urls",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Adds to cart and check out",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on register account",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter manadatory fileds  \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user enters delivery methods",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user confirms order and take screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 69,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;1"
    },
    {
      "cells": [
        "PaymentReg",
        "0"
      ],
      "line": 70,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1388044,
  "status": "passed"
});
formatter.before({
  "duration": 4509936976,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "TC007 Order Placement with Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "user enters urls",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Adds to cart and check out",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on register account",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter manadatory fileds  \"PaymentReg\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user enters delivery methods",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user confirms order and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_enters_urls()"
});
formatter.result({
  "duration": 4779857237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 12576763952,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_changes_delivery_date()"
});
formatter.result({
  "duration": 1656324763,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart_and_check_out()"
});
formatter.result({
  "duration": 13586296489,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_register_account()"
});
formatter.result({
  "duration": 1607157712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentReg",
      "offset": 26
    },
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "OpencartStepsTest.enter_manadatory_fileds_and(String,int)"
});
formatter.result({
  "duration": 13018981987,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_enters_delivery_methods()"
});
formatter.result({
  "duration": 3456207953,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_confirms_order_and_take_screenshot()"
});
formatter.result({
  "duration": 11274340007,
  "status": "passed"
});
formatter.after({
  "duration": 169107,
  "status": "passed"
});
formatter.after({
  "duration": 1552030381,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "TC008 Edit Account and lastname",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User enter credentials \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User able edit the Existing login account",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 80,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;1"
    },
    {
      "cells": [
        "login",
        "2"
      ],
      "line": 81,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1730656,
  "status": "passed"
});
formatter.before({
  "duration": 5320856091,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "TC008 Edit Account and lastname",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User enter credentials \"login\" and \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User able edit the Existing login account",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.User_login_to_url()"
});
formatter.result({
  "duration": 4054328229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "OpencartStepsTest.user_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 2654308678,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.User_needs_to_click_login_button()"
});
formatter.result({
  "duration": 2665740490,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_able_edit_the_Existing_login_account()"
});
formatter.result({
  "duration": 26659983529,
  "status": "passed"
});
formatter.after({
  "duration": 82598,
  "status": "passed"
});
formatter.after({
  "duration": 1213508989,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 92,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 93,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1401729,
  "status": "passed"
});
formatter.before({
  "duration": 4122832098,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 3980917331,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4062505957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 11923378030,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_from_component_and_add_to_cart()"
});
formatter.result({
  "duration": 11395569501,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.fill_all_the_details_and_upload_the_file()"
});
formatter.result({
  "duration": 3732088493,
  "status": "passed"
});
formatter.after({
  "duration": 31280,
  "status": "passed"
});
formatter.after({
  "duration": 1177276159,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 97,
  "name": "TC010 Product Availabilty",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user search for item and add to cart",
  "keyword": "And "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 103,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 104,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2310311,
  "status": "passed"
});
formatter.before({
  "duration": 3842329959,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "TC010 Product Availabilty",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user search for item and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4109107571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 2631585815,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 8184687531,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_search_for_item_and_add_to_cart()"
});
formatter.result({
  "duration": 25022189150,
  "status": "passed"
});
formatter.after({
  "duration": 54251,
  "status": "passed"
});
formatter.after({
  "duration": 1346995301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "TC011 Remove Product",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 116,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;1"
    },
    {
      "cells": [
        "login",
        "3"
      ],
      "line": 117,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1344546,
  "status": "passed"
});
formatter.before({
  "duration": 4125312982,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "TC011 Remove Product",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4886713635,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3792439071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "3",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 8006584410,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 20617338,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 19232389805,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.view_Cart_and_RemoveProduct()"
});
formatter.result({
  "duration": 23379057645,
  "status": "passed"
});
formatter.after({
  "duration": 95306,
  "status": "passed"
});
formatter.after({
  "duration": 1420606585,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "TC012 Apply Coupon Code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "user Adds to cart and add coupon apply",
  "keyword": "Then "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 129,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 130,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1405150,
  "status": "passed"
});
formatter.before({
  "duration": 4231725598,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "TC012 Apply Coupon Code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "user Adds to cart and add coupon apply",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4779019523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 3618161380,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 4437755768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 18185144022,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_changes_delivery_date()"
});
formatter.result({
  "duration": 837066145,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart_and_add_coupon_apply()"
});
formatter.result({
  "duration": 15252747130,
  "status": "passed"
});
formatter.after({
  "duration": 87486,
  "status": "passed"
});
formatter.after({
  "duration": 1320110262,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 133,
  "name": "TC013 Coupon code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 135,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User enter credentials \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User apply empty coupon code",
  "keyword": "Then "
});
formatter.examples({
  "line": 139,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 140,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;1"
    },
    {
      "cells": [
        "login",
        "2"
      ],
      "line": 141,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1576701,
  "status": "passed"
});
formatter.before({
  "duration": 4970952741,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "TC013 Coupon code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 135,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User enter credentials \"login\" and \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User apply empty coupon code",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.User_login_to_url()"
});
formatter.result({
  "duration": 4271952475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "OpencartStepsTest.user_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 2898252971,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.User_needs_to_click_login_button()"
});
formatter.result({
  "duration": 2994086151,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_apply_empty_coupon_code()"
});
formatter.result({
  "duration": 19447566402,
  "status": "passed"
});
formatter.after({
  "duration": 67447,
  "status": "passed"
});
formatter.after({
  "duration": 1429567776,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 144,
  "name": "TC014 Estimate Shipping \u0026 Taxes",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 146,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "user Adds to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 157,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;1"
    },
    {
      "cells": [
        "login",
        "4"
      ],
      "line": 158,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1389999,
  "status": "passed"
});
formatter.before({
  "duration": 4144761724,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "TC014 Estimate Shipping \u0026 Taxes",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 146,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "enters credentials \"login\" and 4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "user Adds to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4570784611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 2502450337,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2891931995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 19903243574,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart()"
});
formatter.result({
  "duration": 289712104,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_going_to_shopping_cart_and_estimate_taxes()"
});
formatter.result({
  "duration": 4363184094,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.enter_details_and_click_quote()"
});
formatter.result({
  "duration": 9009034503,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.flat_shipping_and_scrrenshot()"
});
formatter.result({
  "duration": 6993799745,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.billing_details_and_continue()"
});
formatter.result({
  "duration": 23031798910,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.return_to_home_page()"
});
formatter.result({
  "duration": 4082598379,
  "status": "passed"
});
formatter.after({
  "duration": 65981,
  "status": "passed"
});
formatter.after({
  "duration": 2238207860,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 161,
  "name": "TC015 Wish list",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 163,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 168,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 169,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1317664,
  "status": "passed"
});
formatter.before({
  "duration": 4837196640,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "TC015 Wish list",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 163,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 3490268787,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4463153059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 8231598523,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_and_add_to_wishlist()"
});
formatter.result({
  "duration": 43310521029,
  "status": "passed"
});
formatter.after({
  "duration": 67936,
  "status": "passed"
});
formatter.after({
  "duration": 2060678040,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 172,
  "name": "TC016 Order history/Product return",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 180,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 181,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1538089,
  "status": "passed"
});
formatter.before({
  "duration": 4699139560,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "TC016 Order history/Product return",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4570526064,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4122028108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 9279580361,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 14632620,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_order_History_and_return_the_product()"
});
formatter.result({
  "duration": 27948861828,
  "status": "passed"
});
formatter.after({
  "duration": 56206,
  "status": "passed"
});
formatter.after({
  "duration": 1202423211,
  "status": "passed"
});
});