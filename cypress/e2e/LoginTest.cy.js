/// <reference types="Cypress" />
beforeEach(function () {
        cy.visit('https://www.reddit.com');
})

it.only('login fail', function () {

        // cy.get('#login-button').should('have.attr', 'href')
        // .then((href) => {
        //   cy.visit(href)
        // });
        cy.get('.items-center').contains('Log In').click();
        cy.wait(2000)
        cy.intercept('POST','/login').as('login');
        cy.get('iframe.iframe').should('be.visible').its('0.contentDocument').its('body').should('not.be.undefined').then(cy.wrap).as('iframe');
        cy.get('@iframe').find('input#loginUsername').type('asd');
        cy.get('@iframe').find('input#loginPassword').type('QATestiasddngPassword');
        cy.get('@iframe').find('.AnimatedForm button').click();
        cy.wait('@login').its('response.statusCode').should('eq',400);
        cy.get('@iframe').contains('Incorrect username or password').should('be.visible');
        
});

it('popular on reddit', function () {
        cy.get('[name="hamburger-menu"] button').click();
        cy.contains('About Reddit').click();
        cy.contains('Dive Into Anything').should('be.visible');
})

it('login pass', function () {
        cy.get('.items-center').contains('Log In').click();
        cy.wait(2000)
        cy.intercept('POST','/login').as('login');
        cy.get('iframe.iframe').should('be.visible').its('0.contentDocument').its('body').should('not.be.undefined').then(cy.wrap).as('iframe');
        cy.get('@iframe').find('input#loginUsername').type('QATestingAccount');
        cy.get('@iframe').find('input#loginPassword').type('QATestingPassword{enter}');
        // cy.get('@iframe').find('.AnimatedForm button').click();
        cy.wait('@login').its('response.statusCode').should('eq',200);
        cy.wait(6000)
        cy.get('#SearchDropdown input').type('r/argentina{enter}')
});