/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { testHelpers } from '../support/helpers';
import { onContactUs } from '../support/PageObjects/PO_ContactUsPage.spec';
import { testData } from '../support/PageObjects/TestData.spec';
import { onHomePageContent } from '../support/PageObjects/PO_HomePageContent.spec';

describe ("Contact Us page check", () => {
   it ("Check Contact Us page elements are displayed", () => {
      testHelpers.logStep("Go to Contact Us Page")
      navigateTo.contactUsUrl;

      testHelpers.logStep("Verify Contact Us Page")
      onContactUs.verifyContactUsPageElements()

      testHelpers.logStep("Fill Form on contact us page")

      //cy.get('.status') - text 'Success! Your details have been submitted successfully.
      //cy.get('#form-section > .btn') - btn home

      onContactUs.txt_Name.clear().type(testData.userDataForContactUsPage.name)
      onContactUs.txt_Email.clear().type(testData.userDataForContactUsPage.email)
      onContactUs.txt_Subject.clear().type(testData.userDataForContactUsPage.subject)
      onContactUs.txt_YourMessageHere.clear().type(testData.userDataForContactUsPage.message)

      cy.fixture("UploadTestFile.jpg").as("fileForUpload")
      onContactUs.btn_UploadFile.selectFile("@fileForUpload")

      onContactUs.btn_Submit.click()

      testHelpers.logStep("verify message was sent successfully")
      onContactUs.verifyMessageWasSentSuccessfuly();

      onContactUs.btn_returnToHomePage.click();
      onHomePageContent.verifyHomePageHeaderElements();
  })
})
