Feature: Amazon Online Application Test

    @SmokeTest @RegressionTest
   Scenario: Test Amazon Login Page
        #  Given amazon Login Page open
         # |/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|
          Then get the title home page
         # And close the browser

        @RegressionTest
       Scenario: Loging to application and add products
          #Given amazon Login Page open
          # |/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|
           Then enter username and click singin
          |aselenm@gmail.com|a@selenm|
          Then search the product
          |iphone x 64 gb|
         Then click on product and get name and prcie and add
          Then check the product is add to buskat and baskat page
         # And close the browser

        @RegressionTest
        Scenario: Relogin and validte busket count
          #Given amazon Login Page open
           #|/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|
          Then enter username and click singin
            |aselenm@gmail.com|a@selenm|
          Then check busket items present or not
         # And close the browser

        @SmokeTest
      Scenario: checking invalid loging
        #Given amazon Login Page open
         #|/home/sanath/Applications/Drivers/chromedriver|https://www.amazon.com|
        Then enter user name and incorect password and click singine
          |aselenm@gmail.com|a@selenmdd|
        #And close the browser



