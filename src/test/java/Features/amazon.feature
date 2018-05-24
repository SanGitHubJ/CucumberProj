Feature: Amazon Online Application Test
  Scenario: Test Amazon Login Page
    Given amazon Login Page open
    |<pls set driver path>|https://www.amazon.com|
    Then get the title home page
    And close the browser


  Scenario: Loging to application and add products
    Given amazon Login Page open
     Then enter username and click singin
    |aselenm@gmail.com|a@selenm|
    Then search the product
    |iphone x 64 gb|
   Then click on product and get name and prcie and add
    Then check the product is add to buskat and baskat page
    And close the browser

  Scenario: Relogin and validte busket count
    Given amazon Login Page open
    Then enter username and click singin
      |aselenm@gmail.com|a@selenm|
    Then check busket items present or not
    And close the browser

Scenario: checking invalid loging
  Given amazon Login Page open
  Then enter user name and incorect password and click singine
    |aselenm@gmail.com|a@selenm|
  And close the browser
