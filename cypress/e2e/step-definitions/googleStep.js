const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("user navigates to {string}", function (url) {
  cy.visit(url)
});

When("user search for {string}", function (input) {
  cy.get('[name="q"]').type(`${input}{enter}`)
});


Then(/^user should see "([^"]*)" in the URL$/, (url) => {
	cy.url().should('contain', url)
});


Then(/^user should see "([^"]*)" in the title$/, (title) => {
	cy.title().should('contain', url)
});
