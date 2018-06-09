package RunnerTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Sanath on 5/23/2018.
 */


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features/amazon.feature",
        glue = {"StepsDefinition"},
        format = {"pretty","html:Test-Result","json:Result-Jason/jason_Result.json"},
        monochrome = true,
        strict = true,
        dryRun = false
)

public class RunnerTest {
}
