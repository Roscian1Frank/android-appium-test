package com.appiumtest.helpers;

import com.appiumtest.steps.AppTestBase;
import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by roscian.frank on 01/05/2017.
 */
public class CommonAction {

    public static AppiumDriver driver;

    public CommonAction() {
        driver = AppTestBase.driver;
    }
    public void waitForElement(){
        try{
            WebDriverWait wait = new WebDriverWait(driver, 10);
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
