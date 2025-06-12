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


// When(/^user selects "([^"]*)" from the first dropdown menu$/, (option) => {
// 	htmlElementsPage.selectFirstDropdown(option)
// });

// Then(/^user selects "([^"]*)" from the second dropdown menu$/, (option) => {
// 	htmlElementsPage.selectSecondDropdown(option)
// });

// Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (option) => {
// 	htmlElementsPage.getFirstDropdown().should('have.valiue', option)
// });

// Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (option) => {
// 	htmlElementsPage.getSecondDropdown().should('have.valiue', option)
// });


When(/^user selects "([^"]*)" from the "([^"]*)" dropdown menu$/, (option, index) => {
	htmlElementsPage.selectOptionFromDropdownByPlaceholder(index, option)
});


Then(/^"([^"]*)" should be the selected option in the "([^"]*)" dropdown$/, (option,index) => {
	htmlElementsPage.getDropdownLocator(index).should('have.value', option)
});


Then(/^validate the texts on the ordered list$/, (dataTable) => {
	// const arr = ['Cypress', 'Playwright', 'Selenium Webdriver']
	const arr = dataTable.rawTable.flat()
	// const arr2 = dataTable.rowsHash()

	// for(const key in arr2) {
	// 	cy.log(key)
	// 	cy.log(arr2[key])
	// }


	arr.forEach((el) => {
		cy.log(el)
	})

	htmlElementsPage.getOrderListItems().each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
});





