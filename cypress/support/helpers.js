/// <reference types="cypress" />

/// <reference types="cypress" />

import { onLoginPage } from "./PageObjects/PO_LoginPage.spec";
import { testData } from "./PageObjects/TestData.spec";

export class TestHelpers{

    logStep(text){ cy.log("**" + text + "**") }
    
    loginUser(){
      testHelpers.logStep("Type all needed credentials and click Login btn")
      onLoginPage.txt_loginEmailAddress.clear().type(testData.existingUser.email)
      onLoginPage.txt_loginPassword.clear().type(testData.existingUser.password)
      onLoginPage.btn_Login.click();
    }

}
export const testHelpers = new TestHelpers();