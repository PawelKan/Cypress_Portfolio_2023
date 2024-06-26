/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { on } from 'events';
import { testHelpers } from '../support/helpers';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onAccountCreatedPage } from '../support/PageObjects/PO_AccountCreatedPage.spec';
import { onAccountDeletedPage } from '../support/PageObjects/PO_AccountDeletedPage.spec';
import { onHomePageHeader } from '../support/PageObjects/PO_HomePageHeader.spec';
import { onLoginPage } from '../support/PageObjects/PO_LoginPage.spec';
import { onRegisterPage } from '../support/PageObjects/PO_RegisterPage.spec';
import { testData } from '../support/PageObjects/TestData.spec';

describe ("(UI) Register tests", () => {
   it("Register new user and delete it after registration", () => {
      cy.intercept({method: "POST", url: "https://automationexercise.com/signup"}).as("POST_RegisterUser")
      
      testHelpers.logStep("Prepare data for test")
      const name = faker.name.firstName()
      const lastName = faker.name.lastName();
      const mail = faker.internet.email(name, lastName, "randomMailForTest.com");
      
      testHelpers.logStep("Navigate to Login Page")
      navigateTo.loginPageUrl;

      testHelpers.logStep("Fill Signup Data and click Signup button")
      onLoginPage.txt_signUpName.clear().type(name);
      onLoginPage.txt_signUpEmail.clear().type(mail)
      onLoginPage.btn_Singup.click();

      testHelpers.logStep("Verify and fill register form")
      onRegisterPage.verifyRegisterFormFields(name, mail);
      onRegisterPage.verifyRegisterFormLabels("RegisterFormLabels.json")

      onRegisterPage.radio_Mr.check()
      onRegisterPage.txt_Password.clear().type('Password1234')
      onRegisterPage.list_dobDay.select("17")
      onRegisterPage.list_dobMonth.select("January")
      onRegisterPage.list_dobYear.select("1980")
      onRegisterPage.chk_SignUpForNewsletter.check()
      onRegisterPage.chk_ReceiveSpecialOfferFromOurPartners.check()
      onRegisterPage.txt_FirstName.clear().type(name);
      onRegisterPage.txt_LastName.clear().type(lastName);
      onRegisterPage.txt_Company.clear().type("CompanyNameData")
      onRegisterPage.txt_Address.clear().type("Street number 1")
      onRegisterPage.txt_Address2.clear().type("Street number 2")
      onRegisterPage.list_Country.select("Singapore")
      onRegisterPage.txt_State.clear().type("State name")
      onRegisterPage.txt_City.clear().type("City-name")
      onRegisterPage.txt_Zipcode.clear().type("33-333")
      onRegisterPage.txt_MobileNumber.clear().type("999888777")

      testHelpers.logStep("Click Create Account button")
      onRegisterPage.btn_CreateAccount.click()

      cy.wait("@POST_RegisterUser").then(response => {
         console.log(response)
      })

      testHelpers.logStep("Click Continue button")
      onAccountCreatedPage.btn_Continue.click()

      testHelpers.logStep("Verify header buttons for Logged in User")
      onHomePageHeader.verifyHomePageHeaderElements_ForLoggedInUser()

      testHelpers.logStep("Click Delete Account button")
      onHomePageHeader.btn_DeleteAccount.click()

      testHelpers.logStep("Verify Delete Account page")
      onAccountDeletedPage.verifyElementsOnAccountDeletedPage()

      testHelpers.logStep("Click Continue button")
      onAccountDeletedPage.btn_Continue.click()

      testHelpers.logStep("Verify Home page for not logged in user")
      onHomePageHeader.verifyHomePageHeaderElements_ForNotLoggedInUser()
   })
})

describe("(UI) Login tests", () => {
   it("UI - Login and Logout existing user", () => {
      testHelpers.logStep("Visit Login page")
      navigateTo.loginPageUrl
      
      testHelpers.logStep("Type all needed credentials and click Login btn")
      onLoginPage.txt_loginEmailAddress.clear().type(testData.existingUser.email)
      onLoginPage.txt_loginPassword.clear().type(testData.existingUser.password)
      onLoginPage.btn_Login.click();
      
      testHelpers.logStep("Verify page after login")
      onHomePageHeader.verifyHomePageHeaderElements_ForLoggedInUser();
      onHomePageHeader.btn_LoggedInAs.should('contain', 'Logged in as ' + testData.existingUser.username)

      testHelpers.logStep("Click on Logout button and verify homepage after logout")
      onHomePageHeader.btn_Logout.click();
      onHomePageHeader.verifyHomePageHeaderElements_ForNotLoggedInUser();
   })

   it("UI - Try to login with incorrect username and password", () => {
      testHelpers.logStep("Visit Login page")
      navigateTo.loginPageUrl

      testHelpers.logStep("Type all needed credentials and click Login btn")
      onLoginPage.txt_loginEmailAddress.clear().type('ThisMain@notExist.com')
      onLoginPage.txt_loginPassword.clear().type('PassNotExist')
      onLoginPage.btn_Login.click();

      testHelpers.logStep("Verify Error message text")
      onLoginPage.txt_errorLoginMessage.should('be.visible').and('contain', onLoginPage.texts.str_loginErrorMessageText)
   })

   it.only('UI - Verify field tooltip with text \'Fill this field\' (property use)', () => {
      testHelpers.logStep("Visit Login page")
      navigateTo.loginPageUrl

      onLoginPage.txt_loginEmailAddress
         .invoke('prop', 'validationMessage')
         .should('equal', 'Wypełnij to pole.')

      onLoginPage.txt_loginEmailAddress
         .type("invalidMailFormat")
         .invoke('prop', 'validationMessage')
         .should('equal', 'Uwzględnij znak „@” w adresie e-mail. W adresie „invalidMailFormat” brakuje znaku „@”.')
         
      onLoginPage.txt_loginEmailAddress
         .type('@')
         .invoke('prop', 'validationMessage')
         .should('equal', 'Podaj część po znaku „@”. Adres „invalidMailFormat@” jest niepełny.')

      
      onLoginPage.txt_loginPassword
         .invoke('prop', 'validationMessage')
         .should('equal', 'Wypełnij to pole.')
   });
})