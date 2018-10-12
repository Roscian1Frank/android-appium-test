package com.appiumTest.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static com.appiumTest.helpers.CommonAction.driver;

/**
 * Created by roscian.frank on 05/05/2017.
 */
public class Calculator_page {
    public Calculator_page() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(className = "android.widget.TextView")
    public WebElement appHeader;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button1")
    public WebElement button1;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button2")
    public WebElement button2;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button3")
    public WebElement button3;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button4")
    public WebElement button4;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button5")
    public WebElement button5;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button6")
    public WebElement button6;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button7")
    public WebElement button7;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button8")
    public WebElement button8;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button9")
    public WebElement button9;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button10")
    public WebElement buttonDot;

    @FindBy(id = "com.hackpundit.www.assignment1:id/button0")
    public WebElement button0;

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

    @FindBy(id = "com.hackpundit.www.assignment1:id/buttoneql")
    public WebElement eqlButton;

    @FindBy(id = "com.hackpundit.www.assignment1:id/edt1")
    public WebElement resultBar;

    public void addition(){
        button5.click();
        addButton.click();
        button8.click();
        eqlButton.click();
    }
    public void subtraction(){
        button8.click();
        subButton.click();
        button5.click();
        eqlButton.click();
    }

    public void multiplication(){
        button8.click();
        mulButton.click();
        button5.click();
        eqlButton.click();
    }

    public void division(){
        button8.click();
        divButton.click();
        button5.click();
        eqlButton.click();
    }

    public void buttonCheck(){
        button1.click();
        button2.click();
        button3.click();
        button4.click();
        button5.click();
        button6.click();
        button7.click();
        button8.click();
        button9.click();
        buttonDot.click();
        button0.click();
    }


}
