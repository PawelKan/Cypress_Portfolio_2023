/// <reference types="cypress" />

class NavigateToUrl{

    get homePageUrl() { return cy.visit("/") }
    get loginPageUrl() { return cy.visit("/login") }

}
export const navigateTo = new NavigateToUrl();