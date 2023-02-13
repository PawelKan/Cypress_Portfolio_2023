/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';

describe ("Login and Register page tests", () => {
   it ("Register new user", () => {
      navigateTo.homePageUrl;
      
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