/// <reference types="Cypress" />
const LoginPage = require("../../pages/realWorldApp/LoginPage");
beforeEach(function () {
    cy.visit('http://localhost:3000/')
})
it('Login wrong credentials', function(){
    LoginPage.getUsernameInput().type('username')
    LoginPage.getPasswordInput().type('password')
    LoginPage.getRememberCheckbox().check()
    LoginPage.getSubmitButton().click()
    LoginPage.getErrorMessage().should('contain','Username or password is invalid')
});

it('Submit button disabled', function(){
    LoginPage.getRememberCheckbox().check();
    LoginPage.getSubmitButton().should('be.disabled')
    LoginPage.getUsernameInput().type('username')
    LoginPage.getSubmitButton().should('be.disabled')
    LoginPage.getPasswordInput().type('pas')
    LoginPage.getSubmitButton().should('be.disabled')
    LoginPage.getPasswordInput().type('sword')
    LoginPage.getSubmitButton().should('be.enabled')
    LoginPage.getUsernameInput().clear()
    LoginPage.getSubmitButton().should('be.disabled')
})

it('Login correct credentials', function(){
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    LoginPage.getUsernameInput().type(username)
    LoginPage.getPasswordInput().type(password+'{enter}')
    
})