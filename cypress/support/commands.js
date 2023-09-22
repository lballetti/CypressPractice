// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@zebrunner/javascript-agent-cypress/lib/commands/commands');
Cypress.Commands.add('login',(username,password)=>{
        cy.visit('https://www.reddit.com/login/')
        cy.intercept('POST','/login').as('login');
        cy.get('#loginUsername').type(username); //QATestingAccount
        cy.get('#loginPassword').type(password); //QATestingPassword
        cy.get('.AnimatedForm button').click();
        // cy.wait('@login').its('response.statusCode').should('eq',400);
        cy.visit('https://www.reddit.com/')
})