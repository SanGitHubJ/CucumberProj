package Features;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;

/**
 * Created by Sanath on 5/22/2018.
 */
public class AmazonStepsDefinition {

    WebDriver driver;

    @Given("^amazon Login Page open$")
    public void amazon_login_page(){


        String driverlocation="E:\\Sanath\\SelleniumNew\\projects\\drivers\\chromedriver(1).exe";
        File driverPath= new File(driverlocation);
        System.setProperty("webdriver.chrome.driver",driverPath.toString());
        //System.setProperty("webdriver.chrome.driver","E:\\Sanath\\SelleniumNew\\MyProjects\\src\\main\\java\\com\\crm\\qa\\config\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.amazon.com");

    }
    @Then("^get the title home page$")
    public void test_amazon_login_page_title(){

        String title = driver.getTitle();
        Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",title);
    }

    @And("^close the browser$")
    public void close_browser(){

        driver.quit();
    }
}
