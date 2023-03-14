/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_ShoppingPaymentCardPage{
    get header_Payment(){ return cy.get('.heading')  }

    get lab_NameOnCard() { return cy.get(':nth-child(2) > .col-sm-12 > .control-label') }
    get txt_NameOnCard() { return cy.get('[data-qa="name-on-card"]') }
    
    get lab_CardNumber() { return cy.get(':nth-child(3) > .col-sm-12 > .control-label')}
    get txt_CardNumber() { return cy.get('[data-qa="card-number"]')}

    get lab_CVC() { return cy.get('.cvc > .control-label') }
    get txt_CVC() { return cy.get('[data-qa="cvc"]') }

    get lab_Expiration() { return cy.get(':nth-child(2) > .control-label') }
    get txt_Expiration_MM() { return cy.get('[data-qa="expiry-month"]') }
    get txt_Expiration_YYYY() { return cy.get('[data-qa="expiry-year"]') }

    get btn_PayAndConfirmOrder() { return cy.get('[data-qa="pay-button"]') }


}
export const onShoppingPaymentCardPage = new PO_ShoppingPaymentCardPage();