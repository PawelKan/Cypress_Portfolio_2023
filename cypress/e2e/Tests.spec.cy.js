/// <reference types="cypress" />

describe ("Home page tests", () => {
   it ("main header check", () => {
      cy.visit('/')
      cy.get('.header-middle').should('be.visible')
         .and('contain', 'Home')
         .and('contain', 'Products')
         .and('contain', 'Cart')
         .and('contain', 'Signup / Login')
         .and('contain', 'Test Cases')
         .and('contain', 'API Testing')
         .and('contain', 'Video Tutorials')
         .and('contain', 'Contact us')

    
   })

})