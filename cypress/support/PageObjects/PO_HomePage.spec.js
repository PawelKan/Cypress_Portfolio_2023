/// <reference types="cypress" />

import { testHelpers } from "../helpers"

export class PO_HomePage{

    get headerSection() { return cy.get('.header-middle') }
    get btn_Home() { return cy.get('.header-middle > .container > .row').contains("Home") }
    get btn_Products() { return cy.get('.header-middle > .container > .row').contains("Products")}
    get btn_Cart() { return cy.get('.header-middle > .container > .row').contains("Cart") }
    get btn_SignupLogin() { return cy.get('.header-middle > .container > .row').contains("Signup / Login") }
    get btn_TestCases() { return cy.get('.header-middle > .container > .row').contains("Test Cases") }
    get btn_APITesting() { return cy.get('.header-middle > .container > .row').contains("API Testing") }
    get btn_VideoTutorials() { return cy.get('.header-middle > .container > .row').contains("Video Tutorials") }
    get btn_ContactUs() { return cy.get('.header-middle > .container > .row').contains("Contact us") }
    get btn_Logout() { return cy.get('.header-middle > .container > .row').contains("Logout") }
    get btn_DeleteAccount() {return cy.get('.header-middle > .container > .row').contains("Delete Account") }
    get btn_LoggedInAs() {return cy.get('.header-middle > .container > .row').contains("Logged in as") }

    
    verifyHomePageElements_ForNotLoggedInUser(){
        testHelpers.logStep("VERIFY ELEMENTS ON HOME PAGE FOR NOT LOGGED IN USER")

        this.btn_Home.should('be.visible').and('contain', "Home")
        this.btn_Products.should('be.visible').and('contain', "Products")
        this.btn_Cart.should('be.visible').and('contain', "Cart")
        this.btn_SignupLogin.should('be.visible').and('contain', "Signup / Login")
        this.btn_TestCases.should('be.visible').and('contain', "Test Cases")
        this.btn_APITesting.should('be.visible').and('contain', "API Testing")
        this.btn_VideoTutorials.should('be.visible').and('contain', "Video Tutorials")
        this.btn_ContactUs.should('be.visible').and('contain', "Contact us")
        
        this.headerSection.should('not.contain', "Logout")
            .and('not.contain', "Delete Account")
            .and('not.contain', 'Logged in as')
    }

    verifyHomePageElements_ForLoggedInUser(){
        testHelpers.logStep("VERIFY ELEMENTS ON HOME PAGE FOR LOGGED IN USER")

        this.btn_Home.should('be.visible').and('contain', "Home")
        this.btn_Products.should('be.visible').and('contain', "Products")
        this.btn_Cart.should('be.visible').and('contain', "Cart")
        this.btn_TestCases.should('be.visible').and('contain', "Test Cases")
        this.btn_APITesting.should('be.visible').and('contain', "API Testing")
        this.btn_VideoTutorials.should('be.visible').and('contain', "Video Tutorials")
        this.btn_Logout.should('be.visible').and('contain', "Logout")
        this.btn_DeleteAccount.should('be.visible').and('contain', "Delete Account")
        this.btn_ContactUs.should('be.visible').and('contain', "Contact us")
        
        this.headerSection.should('not.contain', "Signup / Login")
    }

}
export const onHomePage = new PO_HomePage();