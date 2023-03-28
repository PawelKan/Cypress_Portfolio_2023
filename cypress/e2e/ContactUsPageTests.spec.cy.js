/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { testHelpers } from '../support/helpers';
import { onContactUs } from '../support/PageObjects/PO_ContactUsPage.spec';

describe ("Contact Us page check", () => {
   it ("Check Contact Us page elements are displayed", () => {
      testHelpers.logStep("Go to Contact Us Page")
      navigateTo.contactUsUrl;

      testHelpers.logStep("Verify Contact Us Page")
      onContactUs.verifyContactUsPageElements()
   })
})