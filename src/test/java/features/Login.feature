 Feature: Validate Techfios Login Functionality 

Background: 
	Given User is on the Techfios login page 

@Scenario1 @Smoke
Scenario: 1 User should be able to login with the valid credentials 
	When Users enter username as "demo@techfios.com" 
	When Users enter password as "abc123"   
	And Users click on signin button  
	Then Users should land on Dashboard page
 
@Scenario2	
	Scenario: 2 User should be able to login with the valid credentials 
	When Users enter username as "demo2@techfios.com" 
	When Users enter password as "abc123"  
	And Users click on signin button  
	Then Users should land on Dashboard page

@Scenario3	
	Scenario: 3 User should be able to login with the valid credentials 
	When Users enter username as "demo@techfios.com" 
	When Users enter password as "abc124"  
	And Users click on signin button  
	Then Users should land on Dashboard page
	
@Scenario4	
	Scenario: 4 User should be able to login with the valid credentials 
	When Users enter username as "demo2@techfios.com" 
	When Users enter password as "abc124"  
	And Users click on signin button  
	Then Users should land on Dashboard page