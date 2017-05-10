package com.appiumtest.pages;


import com.github.javafaker.Faker;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by roscian.frank on 05/05/2017.
 */
public class Calculator_page {
    public Calculator_page(RemoteWebDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }
    @FindBy(className = "android.widget.TextView")
    public WebElement appHeader;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button5")
    public WebElement button5;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttonadd")
    public WebElement addButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttonsub")
    public WebElement subButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttonmul")
    public WebElement mulButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttondiv")
    public WebElement divButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttonC")
    public WebElement clearButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button8")
    public WebElement button8;

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttoneql")
    public WebElement eqlButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/edt1")
    public WebElement resultButton;


}
