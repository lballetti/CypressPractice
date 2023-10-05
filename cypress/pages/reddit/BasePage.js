class BasePage{

    getLoginButton(){
        return cy.get('.items-center').contains('Log In')
    }
    getSearchBar(){
        return cy.get('reddit-search-large').find('input[placeholder="Search Reddit"]').first()
    }
}
module.exports = new BasePage();