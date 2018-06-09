$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Online Application Test",
  "description": "",
  "id": "amazon-online-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Test Amazon Login Page",
  "description": "",
  "id": "amazon-online-application-test;test-amazon-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "amazon Login Page open",
  "rows": [
    {
      "cells": [
        "/home/sanath/Applications/Drivers/chromedriver",
        "https://www.amazon.com"
      ],
      "line": 4
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "get the title home page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.amazon_login_page(DataTable)"
});
formatter.result({
  "duration": 9361480200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.test_amazon_login_page_title()"
});
formatter.result({
  "duration": 183639533,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.close_browser()"
});
formatter.result({
  "duration": 185866359,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Loging to application and add products",
  "description": "",
  "id": "amazon-online-application-test;loging-to-application-and-add-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "amazon Login Page open",
  "rows": [
    {
      "cells": [
        "/home/sanath/Applications/Drivers/chromedriver",
        "https://www.amazon.com"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "enter username and click singin",
  "rows": [
    {
      "cells": [
        "aselenm@gmail.com",
        "a@selenm"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "search the product",
  "rows": [
    {
      "cells": [
        "iphone x 64 gb"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on product and get name and prcie and add",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "check the product is add to buskat and baskat page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.amazon_login_page(DataTable)"
});
formatter.result({
  "duration": 7186082911,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enter_un_pw(DataTable)"
});
formatter.result({
  "duration": 8295460229,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.search_products(DataTable)"
});
formatter.result({
  "duration": 9031982779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_product()"
});
formatter.result({
  "duration": 4029034650,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.add_to_buskats()"
});
formatter.result({
  "duration": 4024701450,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.close_browser()"
});
formatter.result({
  "duration": 237874297,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Relogin and validte busket count",
  "description": "",
  "id": "amazon-online-application-test;relogin-and-validte-busket-count",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "amazon Login Page open",
  "rows": [
    {
      "cells": [
        "/home/sanath/Applications/Drivers/chromedriver",
        "https://www.amazon.com"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "enter username and click singin",
  "rows": [
    {
      "cells": [
        "aselenm@gmail.com",
        "a@selenm"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "check busket items present or not",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.amazon_login_page(DataTable)"
});
formatter.result({
  "duration": 6333629615,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_enter_un_pw(DataTable)"
});
formatter.result({
  "duration": 7532216343,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.check_busket_items_present()"
});
formatter.result({
  "duration": 93555682,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[id\u003d\u0027nav-cart-count\u0027]\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.13.0-43-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027sanath-Compaq-620\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-43-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 7ae36c0520693d550bfb58dc05c72d2a\n*** Element info: {Using\u003dxpath, value\u003d//span[id\u003d\u0027nav-cart-count\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat StepsDefinition.StepDefinitions.check_busket_items_present(StepDefinitions.java:133)\n\tat ✽.Then check busket items present or not(src/test/java/Features/amazon.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "checking invalid loging",
  "description": "",
  "id": "amazon-online-application-test;checking-invalid-loging",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "amazon Login Page open",
  "rows": [
    {
      "cells": [
        "/home/sanath/Applications/Drivers/chromedriver",
        "https://www.amazon.com"
      ],
      "line": 29
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "enter user name and incorect password and click singine",
  "rows": [
    {
      "cells": [
        "aselenm@gmail.com",
        "a@selenm"
      ],
      "line": 31
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.amazon_login_page(DataTable)"
});
formatter.result({
  "duration": 8184908531,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.incorrect_login_check(DataTable)"
});
formatter.result({
  "duration": 8540044963,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.13.0-43-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027sanath-Compaq-620\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-43-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 590678fbaa4423ed4bc509666f40d503\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat StepsDefinition.StepDefinitions.incorrect_login_check(StepDefinitions.java:153)\n\tat ✽.Then enter user name and incorect password and click singine(src/test/java/Features/amazon.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});