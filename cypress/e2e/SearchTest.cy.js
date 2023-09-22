/// <reference types="Cypress" />

const BasePage = require("../pages/BasePage");

beforeEach(function () {
    cy.visit('https://www.reddit.com');
})

    it('Search r/argentina', function () {
        cy.wait(10)
    });
