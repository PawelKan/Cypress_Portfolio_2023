/// <reference types="cypress" />

import { testHelpers } from "../helpers"

export class PO_AccountDeleted{

    expected_HeaderText = "Account Deleted!"
    expected_FirstParagraphText = "Your account has been permanently deleted!"
    expected_SecondParagraphText = "You can create new account to take advantage of member privileges to enhance your online shopping experience with us."
    expected_btnContinueText = "Continue"

    get header_AccountDeleted(){ return cy.get('b') }
    get text_firstParagraph() { return cy.get('.col-sm-9 > :nth-child(2)') }
    get text_secondParagraph() {return cy.get('.col-sm-9 > :nth-child(3)') }
    get btn_Continue() { return cy.get('[data-qa="continue-button"]')}

    verifyElementsOnAccountDeletedPage(){
        testHelpers.logStep("VERIFY ELEMENTS ON ACCOUNT DELETED PAGE")

        this.header_AccountDeleted.should('have.text', this.expected_HeaderText)
        this.text_firstParagraph.should('have.text', this.expected_FirstParagraphText)
        this.text_secondParagraph.should('have.text', this.expected_SecondParagraphText)
        this.btn_Continue.should('have.text', this.expected_btnContinueText)
    }


}
export const onAccountDeletedPage = new PO_AccountDeleted();