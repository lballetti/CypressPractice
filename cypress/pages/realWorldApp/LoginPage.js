class LoginPage{

    getUsernameInput(){
        return cy.get('#username')
    }
    getPasswordInput(){
        return cy.get('#password')
    }
    getSubmitButton(){
        return cy.get('button[type="submit"]')
    }
    getRememberCheckbox(){
        return cy.get('input[name="remember"]')
    }
    getSignupButton(){
        return cy.get('a[data-test="signup"]')
    }
    getErrorMessage(){
        return cy.get('div[data-test="signin-error"] .MuiAlert-message')
    }
}
module.exports = new LoginPage()