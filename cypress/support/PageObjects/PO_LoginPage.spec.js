/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_LoginPage{

    get txt_loginEmailAddress(){ return cy.get('[data-qa="login-email"]') }
    get txt_loginPassword(){ return cy.get('[data-qa="login-password"]') }
    get btn_Login(){ return cy.get('[data-qa="login-button"]') }
    
    get txt_signUpName(){ return cy.get('[data-qa="signup-name"]')}
    get txt_signUpEmail(){ return cy.get('[data-qa="signup-email"]')}
    get btn_Singup(){ return cy.get('[data-qa="signup-button"]') }

    

}
export const onLoginPage = new PO_LoginPage();