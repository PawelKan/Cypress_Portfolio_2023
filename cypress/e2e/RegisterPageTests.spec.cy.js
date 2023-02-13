/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onLoginPage } from '../support/PageObjects/PO_LoginPage.spec';

describe ("Login and Register page tests", () => {
   it ("Register new user", () => {
      
      navigateTo.loginPageUrl;

      const name = faker.name.firstName()
      const lastName = faker.name.lastName();
      const mail = "randomMailForTest.com";

      onLoginPage.txt_signUpName.clear().type(name);
      onLoginPage.txt_signUpEmail.clear().type(faker.internet.email(name, lastName, "randomMailForTest.com"))
      onLoginPage.btn_Singup.click();

      
      
      
   })

   



})