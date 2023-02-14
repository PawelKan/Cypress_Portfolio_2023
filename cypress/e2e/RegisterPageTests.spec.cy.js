/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onAccountCreatedPage } from '../support/PageObjects/PO_AccountCreatedPage.spec';
import { onAccountDeletedPage } from '../support/PageObjects/PO_AccountDeletedPage.spec';
import { onLoginPage } from '../support/PageObjects/PO_LoginPage.spec';
import { onRegisterPage } from '../support/PageObjects/PO_RegisterPage.spec';

describe ("Login and Register page tests", () => {
   it ("Register new user", () => {
      
      navigateTo.loginPageUrl;

      const name = faker.name.firstName()
      const lastName = faker.name.lastName();
      const mail = faker.internet.email(name, lastName, "randomMailForTest.com");
      

      onLoginPage.txt_signUpName.clear().type(name);
      onLoginPage.txt_signUpEmail.clear().type(mail)
      onLoginPage.btn_Singup.click();

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
      onRegisterPage.btn_CreateAccount.click()

      onAccountCreatedPage.btn_Continue.click()

      cy.get('.header-middle').should('be.visible')
         .and('contain', 'Home')
         .and('contain', 'Products')
         .and('contain', 'Cart')
         .and('contain', 'Logout')
         .and('not.contain', 'Signup / Login')
         .and('contain', 'Delete Account')
         .and('contain', 'Test Cases')
         .and('contain', 'API Testing')
         .and('contain', 'Video Tutorials')
         .and('contain', 'Contact us')
         .and('contain', 'Logged in as')

         cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

         onAccountDeletedPage.verifyElementsOnAccountDeletedPage();
         onAccountDeletedPage.btn_Continue.click();

         cy.get('.header-middle').should('be.visible')
         .and('contain', 'Home')
         .and('contain', 'Products')
         .and('contain', 'Cart')
         .and('contain', 'Signup / Login')
         .and('contain', 'Test Cases')
         .and('contain', 'API Testing')
         .and('contain', 'Video Tutorials')
         .and('contain', 'Contact us')
         .and('not.contain', 'Delete Account')
         .and('not.contain', 'Logout')








 
      
      
   })

   



})