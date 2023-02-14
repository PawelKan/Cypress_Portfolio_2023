/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onHomePage } from '../support/PageObjects/PO_HomePage.spec';

describe ("Home page check", () => {
   it ("Check header elements on HomePage", () => {
      testHelpers.logStep("Go to Home Page")
      navigateTo.homePageUrl;

      testHelpers.logStep("Verify Home Page Header for not logged in user")
      onHomePage.verifyHomePageElements_ForNotLoggedInUser()

   })


   



})