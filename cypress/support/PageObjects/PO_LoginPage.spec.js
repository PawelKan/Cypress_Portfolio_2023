/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_LoginPage{

    get txt_loginEmailAddress(){}
    get txt_loginPassword(){}
    get btn_Login(){}
    
    get txt_signUpName(){ return cy.get('[data-qa="signup-name"]')}
    get txt_signUpEmail(){ return cy.get('[data-qa="signup-email"]')}
    get btn_Singup(){ return cy.get('[data-qa="signup-button"]') }

    


}
export const onLoginPage = new PO_LoginPage();