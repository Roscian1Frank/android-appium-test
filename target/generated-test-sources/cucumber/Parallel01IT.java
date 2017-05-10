import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"classpath:features/Calculator.feature"},
plugin = {"html:target/cucumber-parallel/1.html", "json:target/cucumber-parallel/1.json", "pretty"},
monochrome = false,
tags = {"~@manual"},
glue = { "com.appiumtest.steps" })
public class Parallel01IT {
}
