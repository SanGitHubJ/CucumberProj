$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Online Application Test",
  "description": "",
  "id": "amazon-online-application-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 49288744730,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test Amazon Login Page",
  "description": "",
  "id": "amazon-online-application-test;test-amazon-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#  Given amazon Login Page open"
    },
    {
      "line": 6,
      "value": "# |/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|"
    }
  ],
  "line": 7,
  "name": "get the title home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.test_amazon_login_page_title()"
});
formatter.result({
  "duration": 5831197715,
  "status": "passed"
});
formatter.after({
  "duration": 1391869475,
  "status": "passed"
});
formatter.before({
  "duration": 24207481771,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "# And close the browser"
    }
  ],
  "line": 32,
  "name": "checking invalid loging",
  "description": "",
  "id": "amazon-online-application-test;checking-invalid-loging",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 33,
      "value": "#Given amazon Login Page open"
    },
    {
      "line": 34,
      "value": "#|/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|"
    }
  ],
  "line": 35,
  "name": "enter user name and incorect password and click singine",
  "rows": [
    {
      "cells": [
        "aselenm@gmail.com",
        "a@selenmdd"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.incorrect_login_check(DataTable)"
});
formatter.result({
  "duration": 4661781181,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.15.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027sanath-Compaq-620\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-24-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 3e4198db421f5d4e08ef635f997aaccb\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Hello. Sign in\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat StepsDefinition.StepDefinitions.incorrect_login_check(StepDefinitions.java:192)\n\tat ✽.Then enter user name and incorect password and click singine(src/test/java/Features/amazon.feature:35)\n",
  "status": "failed"
});
formatter.after({
  "duration": 194358379,
  "status": "passed"
});
});