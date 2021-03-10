package steps;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition {

	WebDriver driver;
	LoginPage loginPage;

//	caret(^)

	@Before
	public void beforeRun() {
		 driver= BrowserFactory.startBrowser();
		  loginPage= PageFactory.initElements(driver, LoginPage.class);
	}
	
//	defining the steps in cucumber
	
  @Given ("^User is on the Techfios login page$")
	
//  method name same as given
  public void User_is_on_the_Techfios_login_page() throws InterruptedException {
	  
	  driver.get("https://techfios.com/billing/?ng=admin/");
	Thread.sleep(2000);
}
  
//  method name same as user name with the expression \"([^\"]*)\"$"
 
  
 @When ("^Users enter username as \"([^\"]*)\"$")

  public void Users_enter_username_as(String userName) throws InterruptedException {
 
	  loginPage.enterUserName(userName);
	  Thread.sleep(2000);
	  }
  
  @When ("^Users enter password as \"([^\"]*)\"$")
  
  public void Users_enter_password_as(String password) throws InterruptedException  {
	 
	  loginPage.enterPassword(password);
	  Thread.sleep(2000);
	 
  }
  
  @When ("^Users click on signin button$")
  
  public void Users_click_on_signin_button () throws InterruptedException {
	  
	  loginPage.clickOnSignInButton();
	  Thread.sleep(2000);
  }
  
  @Then ("^Users should land on Dashboard page$")
  
  public void User_should_land_on_Dashboard_page() throws IOException { 
	  
//	String expectedTitle= "Dashboard- iBilling";
//	String actualTitle= loginPage.getPageTitle();
	  
		/*
		 * if(expectedTitle.equalsIgnoreCase(actualTitle)) {
		 * 
		 * System.out.println("Title matched"); }
		 * 
		 * else {
		 * 
		 * System.out.println("Title does not match!!!!"); }
		 */
	  
       Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	  
	 loginPage.takeScreenshotAtEndOfTest(driver);   // this should take a screenshot
	 }
  
  @When("^Users enter \"([^\"]*)\" and \"([^\"]*)\"$")
  public void users_enter_and(String username, String password) throws Throwable {
	  loginPage.enterCredentials(username, password);
  }
  
  @When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_enters_and(String arg1, String arg2) throws Throwable {
      
  }

  @When("^User clicks on signin button$")
  public void user_clicks_on_signin_button() throws Throwable {
      
  }

  @Then("^User should land on Dashboard page$")
  public void user_should_land_on_Dashboard_page() throws Throwable {
      
  }
  
  
  @After
    public void teardown() {
	  driver.close();
	  driver.quit();
  }
  
}