/// <reference types="Cypress" />

const BasePage = require("../pages/BasePage");

beforeEach(function () {
    cy.visit('https://www.reddit.com');
})

    it('Search r/argentina', function () {
        cy.login('QATestingAccount','QATestingPassword');
        BasePage.getSearchBar().click({force:true}).type('r/argentina').wait(3000).parents('form').submit();
        cy.wait(3000)
    });
