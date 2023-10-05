/// <reference types="Cypress" />

const BasePage = require("../pages/BasePage");

beforeEach(function () {
    cy.visit('https://www.reddit.com');
})

    it('Search r/argentina', function () {
        cy.login('QATestingAccount','QATestingPassword');
        cy.get('reddit-search-large').find('span.input-container').click().wait(2000);
        BasePage.getSearchBar().type('text{enter}',{force:true});
        //.type('r/argentina{enter}');
        cy.wait(3000)
    });
