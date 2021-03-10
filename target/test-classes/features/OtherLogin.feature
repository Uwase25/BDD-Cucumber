@OtherLogin 
Feature: Validate Techfios Login Functionality different way 

Background: 
	Given User is on the Techfios login page 
	
@Scenario1 @Smoke 
Scenario Outline:Login different way
	When User enters "<username>" and "<password>"  
	And User clicks on signin button  
	Then User should land on Dashboard page
	
	Examples: 
	|username          | password|
	|demo@techfios.com | abc123|
	|demo2@techfios.com | abc123|
	|demo@techfios.com | abc124|
	|demo2@techfios.com | abc124|