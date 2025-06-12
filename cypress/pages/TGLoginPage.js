const TGBasePage = require("./TGBasePage");

class TGLoginPage extends TGBasePage {
  /* Locators */
  getUsernameInputField() {
    return cy.get('#username')
  }

  getPasswordInputField() {
    return cy.get('#password')
  }

  getLoginButton() {
    return cy.get('#login_btn')
  }

  getErrorMessage() {
    return cy.get('#error_message')
  }

  getSuccessMessage() {
    return cy.get('#success_lgn')
  }

  /* Methods */
  clickLoginButton() {
    this.getLoginButton().click()
  }


  /**
   * Helps user to enter the credentials
   * 
   * @param {string} username - username field
   * @param {string} password - password field
   * 
   * @example
   * login('TechGlobal', 'Test1234')
   */
  login(username, password) {
    this.getUsernameInputField().type(username)
    this.getPasswordInputField().type(password)
  }
}

module.exports = TGLoginPage