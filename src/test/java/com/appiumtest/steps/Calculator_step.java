package com.appiumtest.steps;

import com.appiumtest.helpers.CommonAction;
import com.appiumtest.pages.Calculator_page;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
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
                calcPage.addition();
                break;
            case "subtraction":
                calcPage.subtraction();
                break;
            case "multiplication":
                calcPage.multiplication();
                break;
            case "division":
                calcPage.division();
                break;
            default: {
                Assert.assertTrue(false);
            }
        }
    }

    @When("^I click on each button$")
    public void iClickOnEachButton() throws Throwable {
        calcPage.buttonCheck();
    }

    @Then("^I check input on calculator$")
    public void iCheckInputOnCalculator() throws Throwable {
        Assert.assertEquals("Buttons are not working ", "123456789.0", calcPage.resultBar.getText());
    }

    @And("^I click clear button$")
    public void iClickClearButton() throws Throwable {
        calcPage.clearButton.click();
    }

    @Then("^calculator clear out the numbers$")
    public void calculatorClearOutTheNumbers() throws Throwable {
        Assert.assertEquals("Clear button is not working ", "", calcPage.resultBar.getText());
    }
}
