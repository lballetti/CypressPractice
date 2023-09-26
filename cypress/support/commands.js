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
        cy.get('.items-center').contains('Log In').click();
        cy.wait(2000)
        cy.intercept('POST','/login').as('login');
        cy.get('iframe.iframe').should('be.visible').its('0.contentDocument').its('body').should('not.be.undefined').then(cy.wrap).as('iframe');
        cy.get('@iframe').find('input#loginUsername').type(username);
        cy.get('@iframe').find('input#loginPassword').type(password+'{enter}');
        // cy.visit('https://www.reddit.com/login/')
        // cy.intercept('POST','/login').as('login');
        // cy.get('#loginUsername').type(username); //QATestingAccount
        // cy.get('#loginPassword').type(password+"{enter}"); //QATestingPassword
        // cy.get('.AnimatedForm button').click();
        cy.wait('@login').its('response.statusCode').should('eq',200);
        cy.wait(10000)
})