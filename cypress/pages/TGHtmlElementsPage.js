const TGBasePage = require("./TGBasePage");

class TGHtmlElementsPage extends TGBasePage {
  /* Locators */
  getButtons() {
    return cy.get('#register_button, #signin_button')
  }

  getButtonMessage() {
    return cy.get('.mt-1')
  }

  getButtonByText(label) {
    return this.getButtons().contains(label)
  }

  getFirstDropdown() {
    return cy.get('#company_dropdown1')
  }

  getSeconDropdown() {
    return cy.get('#company_dropdown2')
  }

  getOrderListItems() {
    return cy.get('#ordered_list li')
  }


  /* Methods */
  clickButtonByText(label) {
    this.getButtonByText(label).click()
  }

  selectFirstDropdown(option) {
    this.getFirstDropdown().select(option)
  }

  selectSecondDropdown(option) {
    this.getSecondDropdown().select(option)
  }


  /**
   * This method returns the company dropdown depedns on the placeholder
   * 
   * 
   * @param {'first' | 'second'} dropdown - Dropdown placeholder (first, second) 
   * @returns 
   * 
   * @throws {Error} if the provided key is invalid.
   */
  getDropdownLocator(dropdown) {
    const dropdownLoc = {
      first: '#company_dropdown1',
      second: '#company_dropdown2',
    }

    if(!dropdownLoc[dropdown]) {
      throw new Error(`getDropdownLocator(): "${dropdown}" is not valid key `)
    }

    return cy.get(dropdownLoc[dropdown])
  }

  /**
   * This method selects the dropdown option using label and placeholder
   * 
   * @param {'first' | 'second'} dropdown 
   * @param {string} option 
   */
  selectOptionFromDropdownByPlaceholder(dropdown, option) {
    const $dropdownLocator = this.getDropdownLocator(dropdown)
    $dropdownLocator.select(option)
  }



  /**
   * 1. Search for product
   * 2. And select the product from the list
   * 3. After selecting the product on the list, click on the open modal button
   * 4. In modal, enter some inputs, and close the modal
   */

  // searchProductAndSelect(product) {
  //   cy.get('search').type(`${productName}{enter}` )
  //   cy.get('.row').contains(product).should('exist')
  //   cy.get('row').click()
  // }

  // clickModalButton() {
  //   cy.get('modalButton').click()
  //   cy.get('modal').should('be.visible')
  // }

  // fillTheInputsInProductModal(input1, input2) {
  //   cy.get('modalInput').type(input1)
  //   cy.get('modalInput').type(input2)
  //   cy.get('modalRadioButton').check()
  // }

  // closeTheProductModal() {
  //   cy.get('modalCloseButton').click()
  //   cy.get('modal').should('not.exist')
  // }


  // searchProductAndEditTheItem(product, input1, input2) {
  //   this.searchProductAndSelect(product)
  //   this.clickModalButton()
  //   this.fillTheInputsInProductModal(input1, input2)
  //   this.closeTheProductModal()
  // }
}

module.exports = TGHtmlElementsPage