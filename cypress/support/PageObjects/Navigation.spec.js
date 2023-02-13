/// <reference types="cypress" />

class NavigateToUrl{

    get homePageUrl() { return cy.visit("/") }
    get loginPageUrl() {return cy.visit("/login")}
    //get registerPageUrl() {return cy.visit("/signup")}
    

}
export const navigateTo = new NavigateToUrl();