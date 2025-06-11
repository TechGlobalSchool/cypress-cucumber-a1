const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const TGHtmlElementsPage = require("../../pages/TGHtmlElementsPage");


const htmlElementsPage = new TGHtmlElementsPage()

When(/^user clicks on the "([^"]*)" card$/, (link) => {
	cy.contains('.card, [class*=\'projectCard\']', link).click()
});


Then(/^user should see "([^"]*)" page heading$/, (heading) => {
	htmlElementsPage.getMainHeading().should('have.text', heading)
});


Then(/^the URL should contain "([^"]*)"$/, (url) => {
	cy.url().should('contain', url)
});


When(/^user clicks on the "([^"]*)" button$/, (label) => {
	htmlElementsPage.clickButtonByText(label)
});


Then(/^the text undet it should be "([^"]*)"$/, (message) => {
	htmlElementsPage.getButtonMessage().should('have.text', message)
});


