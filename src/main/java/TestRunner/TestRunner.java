package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Sanath on 5/22/2018.
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/Features/amazon.feature",
                // glue = {"src/main/java/AmazonStepsDefinition"},
        // glue = {"src/main/java/AmazonStepsDefinition/AmazonStepsDefinition.java"}
                   // glue = {"src/main/java/AmazonStepsDefinition"},
                   format = {"pretty","html:Test-Result","json:Result-Jason/jason_Result.json"},
                   // monochrome = true,
                    dryRun = false
                )
public class TestRunner {
}


