/// <reference types="cypress" />

class NavigateToUrl{

    get homePageUrl() { return cy.visit("/") }
    get loginPageUrl() { return cy.visit("/login") }
    get contactUsUrl() {return cy.visit ("/contact_us")}

}
export const navigateTo = new NavigateToUrl();