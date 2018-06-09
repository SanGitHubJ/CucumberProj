package StepsDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by Sanath on 5/23/2018.
 */
public class StepDefinitions {


    public WebDriver driver;


    @Given("^amazon Login Page open$")
    public void amazon_login_page(DataTable drivr) throws IOException {

//        driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);

        List<List<String>> dr = drivr.raw();

       System.setProperty("webdriver.chrome.driver",dr.get(0).get(0));

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();


        driver.get(dr.get(0).get(1));

    }

    @Then("^get the title home page$")
    public void test_amazon_login_page_title() {

        driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);

        String title = driver.getTitle();
        Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", title);
    }

    @And("^close the browser$")
    public void close_browser() {


        driver.manage().timeouts().pageLoadTimeout(2, TimeUnit.SECONDS);
        driver.quit();
    }

    @Then("^enter username and click singin$")
    public void user_enter_un_pw(DataTable credintials) throws InterruptedException {

        try {

            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);
            List<List<String>> data = credintials.raw();
            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);
            Actions action = new Actions(driver);

            action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Hello. Sign in')]")));
            driver.findElement(By.xpath("//a[@id='nav-link-accountList']")).click();

            driver.findElement(By.xpath("//input[@type='email']")).sendKeys(data.get(0).get(0));
            driver.findElement(By.xpath("//input[@id='continue']")).click();

            driver.findElement(By.xpath("//input[@type='password']")).sendKeys(data.get(0).get(1));
            //Thread.sleep(3000);
            driver.findElement(By.xpath(("//input[@id='signInSubmit' and @type='submit']"))).click();

        } catch (TimeoutException e) {

            //System.out.print(e);

        }


    }

    @Then("^search the product$")
    public void search_products(DataTable prd) {
        try {

            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);
            List<List<String>> product = prd.raw();
           // driver.manage().timeouts().pageLoadTimeout(12, TimeUnit.SECONDS);
            driver.findElement(By.xpath("//input[@id='twotabsearchtextbox']")).sendKeys(product.get(0).get(0));
            driver.findElement(By.xpath("//input[@type='submit' and @class='nav-input']")).click();
        } catch (TimeoutException e) {
           // System.out.print(e);
        }

    }

    @Then("^click on product and get name and prcie and add$")
    public void select_product() {

        try {

            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);
            driver.findElement(By.xpath("//h2[@data-attribute='Apple iPhone X, GSM Unlocked 5.8\", 64 GB - Space Gray']")).click();
            String prdname = driver.findElement(By.xpath("//span[@id='productTitle']")).getText();
            Assert.assertEquals("Apple iPhone X, GSM Unlocked 5.8\", 64 GB - Space Gray", prdname);
            String prdprc = driver.findElement(By.xpath("//span[@id='priceblock_ourprice']")).getText();
            Assert.assertEquals("$1,146.99", prdprc);

            driver.findElement(By.xpath("//input[@id='add-to-cart-button' and @name='submit.add-to-cart']")).click();
        } catch (TimeoutException e) {
            //System.out.print(e);
        }
    }

    @Then("^check the product is add to buskat and baskat page$")
    public void add_to_buskats() throws InterruptedException {
        try {


            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);

            driver.findElement(By.xpath("//input[@id='add-to-cart-button' and @name='submit.add-to-cart']")).click();

            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);

            driver.findElement(By.xpath("//span[id='nav-cart-cousnt' and @class='nav-cart-count nav-cart-1']")).click();

            driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);

            String prdname = driver.findElement(By.xpath("//span[@class='a-size-medium sc-product-title a-text-bold']")).getText();
            Assert.assertEquals("Apple iPhone X, GSM Unlocked 5.8\", 64 GB - Space Gray", prdname);
            String prdprc = driver.findElement(By.xpath("//span[@class='a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold']")).getText();
            System.out.println(prdprc);
            Assert.assertEquals("$1,146.99", prdprc);
        } catch (TimeoutException e) {
            //System.out.print(e);
        }
    }

    @Then("^check busket items present or not$")
    public void check_busket_items_present() {


        driver.manage().timeouts().pageLoadTimeout(6, TimeUnit.SECONDS);
        String prdcnt = (driver.findElement(By.xpath("//span[id='nav-cart-count']")).getText());
        Assert.assertEquals("1", prdcnt);
    }

    @Then("^enter user name and incorect password and click singine$")
    public void incorrect_login_check(DataTable incorectCre) {

        driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);


        List<List<String>> data = incorectCre.raw();
        driver.manage().timeouts().pageLoadTimeout(4, TimeUnit.SECONDS);
        Actions action = new Actions(driver);

        action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Hello. Sign in')]")));
        driver.findElement(By.xpath("//a[@id='nav-link-accountList']")).click();

        driver.findElement(By.xpath("//input[@type='email']")).sendKeys(data.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='continue']")).click();

        driver.findElement(By.xpath("//input[@type='password']")).sendKeys(data.get(0).get(1));
        //Thread.sleep(3000);
        driver.findElement(By.xpath(("//input[@id='signInSubmit' and @type='submit']"))).click();

        driver.manage().timeouts().pageLoadTimeout(6, TimeUnit.SECONDS);

        String invdpwd = driver.findElement(By.xpath("//span[contains(text(),'Your password is incorrect')]")).getText();
        Assert.assertEquals("Your password is incorrect", invdpwd);
    }
}
