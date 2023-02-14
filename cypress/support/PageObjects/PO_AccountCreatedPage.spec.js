/// <reference types="cypress" />

export class PO_AccountCreated{

    expected_HeaderText = "Account Created!"
    expected_FirstParagraphText = "Congratulations! Your new account has been successfully created!"
    expected_SecondParagraphText = "You can now take advantage of member privileges to enhance your online shopping experience with us."
    expected_btnContinueText = "Continue"

    get header_AccountCreated(){ return cy.get('b') }
    get text_firstParagraph() { return cy.get('.col-sm-9 > :nth-child(2)') }
    get text_secondParagraph() {return cy.get('.col-sm-9 > :nth-child(3)') }
    get btn_Continue() { return cy.get('[data-qa="continue-button"]')}

    verifyElementsOnAccountCreatedPage(){
        this.header_AccountCreated.should('have.text', this.expected_HeaderText)
        this.text_firstParagraph.should('have.text', this.expected_FirstParagraphText)
        this.text_secondParagraph.should('have.text', this.expected_SecondParagraphText)
        this.btn_Continue.should('have.text', this.expected_btnContinueText)
    }


}
export const onAccountCreatedPage = new PO_AccountCreated();