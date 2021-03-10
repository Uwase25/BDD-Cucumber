package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", // package name
		 glue= "steps",
		tags = "@OtherLogin",  // test scenario 1 and scenario 3 only or @Smoke
		monochrome = true,         // when you execute what is happen on output
		dryRun = false,                      // compare the compilation error
		plugin = {                          // specifies #nt formatting options for output reports
				"pretty",                  // prints the Gherkin source with additional colors & stack traces for errors
				"html:target/cucumber",   // generate html report 
				"json:target/cucumber.json" // contains all info. from Gherkin saurce in json format
				}
)

public class LoginRunner {

}
