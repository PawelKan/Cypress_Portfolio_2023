/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { testHelpers } from '../support/helpers';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onAccountCreatedPage } from '../support/PageObjects/PO_AccountCreatedPage.spec';
import { onAccountDeletedPage } from '../support/PageObjects/PO_AccountDeletedPage.spec';
import { onHomePage } from '../support/PageObjects/PO_HomePage.spec';
import { onLoginPage } from '../support/PageObjects/PO_LoginPage.spec';
import { onRegisterPage } from '../support/PageObjects/PO_RegisterPage.spec';
import { testData } from '../support/PageObjects/TestData.spec';

describe ("Login and Register tests", () => {
   it ("Register new user and delete it after registration", () => {
      
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

      testHelpers.logStep("Click Continue button")
      onAccountCreatedPage.btn_Continue.click()

      testHelpers.logStep("Verify header buttons for Logged in User")
      onHomePage.verifyHomePageElements_ForLoggedInUser()

      testHelpers.logStep("Click Delete Account button")
      onHomePage.btn_DeleteAccount.click()

      testHelpers.logStep("Verify Delete Account page")
      onAccountDeletedPage.verifyElementsOnAccountDeletedPage()

      testHelpers.logStep("Click Continue button")
      onAccountDeletedPage.btn_Continue.click()

      testHelpers.logStep("Verify Home page for not logged in user")
      onHomePage.verifyHomePageElements_ForNotLoggedInUser()
   })

   it.only("Login and Logout existing user", () => {
      testHelpers.logStep("Visit Login page")
      navigateTo.loginPageUrl
      
      testHelpers.logStep("Type all needed credentials and click Login btn")
      onLoginPage.txt_loginEmailAddress.clear().type(testData.existingUser.email)
      onLoginPage.txt_loginPassword.clear().type(testData.existingUser.password)
      onLoginPage.btn_Login.click();
      
      testHelpers.logStep("Verify page after login")
      onHomePage.verifyHomePageElements_ForLoggedInUser();
      onHomePage.btn_LoggedInAs.should('contain', 'Logged in as ' + testData.existingUser.username)

      testHelpers.logStep("Click on Logout button and verify homepage after logout")
      onHomePage.btn_Logout.click();
      onHomePage.verifyHomePageElements_ForNotLoggedInUser();
   })

   it.skip("Try to login with incorrect username and password", () => {
      //TO DO
   })
})