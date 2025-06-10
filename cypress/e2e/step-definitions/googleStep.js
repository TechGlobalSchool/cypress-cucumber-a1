const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user navigates to {string}", function (string) {
  cy.log(string);
  // return "pending";
});

When("user search for {string}", function (string) {
  // return "pending";
});


Then(/^user should see "([^"]*)" in the URL$/, (args1) => {
	console.log(args1);
	return true;
});


Then(/^user should see "([^"]*)" in the URL and do this blabla bal$/, (args1) => {
	console.log(args1);
	return true;
});


