/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onHomePageHeader } from '../support/PageObjects/PO_HomePageHeader.spec';
import { testHelpers } from '../support/helpers';
import { onHomePageFooter } from '../support/PageObjects/PO_HomePageFooter.spec';
import { onHomePageContent } from '../support/PageObjects/PO_HomePageContent.spec';

describe ("Home page check", () => {
   it ("Check header elements on HomePage", () => {
      testHelpers.logStep("Go to Home Page")
      navigateTo.homePageUrl;

      testHelpers.logStep("Verify Home Page Header for not logged in user")
      onHomePageHeader.verifyHomePageHeaderElements_ForNotLoggedInUser()

      testHelpers.logStep("Verify Home Page Content for not logged in user")
      onHomePageContent.verifyHomePageHeaderElements()

      testHelpers.logStep("Verify Home Page Footer for not logged in user")
      onHomePageFooter.verifyHomePageFooterElements()
   })
})