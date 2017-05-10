package com.appiumtest.steps;

import com.appiumtest.helpers.CommonAction;
import com.appiumtest.pages.Calculator_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


/**
 * Created by roscian.frank on 09/05/2017.
 */
public class Calculator_step extends CommonAction {
    Calculator_page calcPage = new Calculator_page(driver);

    @Given("^I am on calculator app$")
    public void iAmOnCalculatorApp() throws Throwable {
        waitForElement();
        Assert.assertTrue(calcPage.appHeader.isDisplayed());
    }

    @When("^I am entering input to the calculator$")
    public void iAmEnteringInputToTheCalculator() throws Throwable {
        calcPage.button5.click();
        calcPage.addButton.click();
        calcPage.button8.click();
        calcPage.eqlButton.click();
    }


    @Then("^I am checking \"([^\"]*)\" result is correct$")
    public void iAmCheckingResultIsCorrect(String result) throws Throwable {

        switch (result) {
            case "addition":
                Assert.assertEquals("Sum is not correct", "13.0", calcPage.resultBar.getText());
                break;
            case "subtraction":
                Assert.assertEquals("Subtraction is not correct", "3.0", calcPage.resultBar.getText());
                break;

            case "multiplication":
                Assert.assertEquals("multiplication is not correct", "40.0", calcPage.resultBar.getText());
                break;
            case "division":
                Assert.assertEquals("division is not correct", "1.6", calcPage.resultBar.getText());
                break;
            default: {
                Assert.assertTrue(false);
            }
        }

    }

    @When("^I am doing \"([^\"]*)\" of two number$")
    public void iAmDoingOfTwoNumber(String calculation) throws Throwable {
        switch (calculation) {
            case "addition":
                calcPage.button5.click();
                calcPage.addButton.click();
                calcPage.button8.click();
                calcPage.eqlButton.click();
                break;
            case "subtraction":
                calcPage.button8.click();
                calcPage.subButton.click();
                calcPage.button5.click();
                calcPage.eqlButton.click();
                break;
            case "multiplication":
                calcPage.button8.click();
                calcPage.mulButton.click();
                calcPage.button5.click();
                calcPage.eqlButton.click();
                break;
            case "division":
                calcPage.button8.click();
                calcPage.divButton.click();
                calcPage.button5.click();
                calcPage.eqlButton.click();
                break;
            default: {
                Assert.assertTrue(false);
            }
        }
    }
}
