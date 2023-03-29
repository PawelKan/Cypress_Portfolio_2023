/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { testHelpers } from '../helpers';

export class PO_ContactUsPage{

    get header_ContactUs(){ return cy.get('.col-sm-12 > .title');};
    get header_GetInTouch(){ return cy.get('div.contact-form > .title') };
    get header_FeedbackForUs(){ return cy.get('.contact-info > .title') }

    get txt_Name(){ return cy.get('[data-qa="name"]') };
    get txt_Email(){ return cy.get('[data-qa="email"]') };
    get txt_Subject(){ return cy.get('[data-qa="subject"]') };
    get txt_YourMessageHere(){ return cy.get('[data-qa="message"]') };
    get btn_UploadFile(){ return cy.get(':nth-child(6) > .form-control') };
    get btn_Submit(){ return cy.get('[data-qa="submit-button"]') };

    get section_RightSideTextUnderFeedbackForUs(){ return cy.get('address') }

    get paragraph_successMessage(){ return cy.get('.status') }
    get btn_returnToHomePage() { return cy.get('#form-section > .btn') }


    verifyContactUsPageElements(){
        this.header_ContactUs
            .should('contain', 'Contact').and('contain', 'Us')

        this.header_GetInTouch
            .should('contain', 'Get In Touch')
        
        this.header_FeedbackForUs
            .should('contain', 'Feedback For Us')

        this.txt_Name.should('be.visible').invoke('attr', 'placeholder').should('contain', 'Name')
        this.txt_Email.should('be.visible').invoke('attr', 'placeholder').should('contain', 'Email')
        this.txt_Subject.should('be.visible').invoke('attr', 'placeholder').should('contain', 'Subject')
        this.txt_YourMessageHere.should('be.visible').invoke('attr', 'placeholder').should('contain', 'Your Message Here')

        this.btn_UploadFile.should('be.visible')
        this.btn_Submit.should('be.visible').and('contain', 'Submit')

        this.section_RightSideTextUnderFeedbackForUs
            .should('contain', 'We really appreciate your response to our website.')
            .and('contain','Kindly share your feedback with us at ')
            .and('contain','feedback@automationexercise.com')
            .and('contain','If you have any suggestion areas or improvements, do let us know. We will definitely work on it.')
            .and('contain','Thank you')
    }

    verifyMessageWasSentSuccessfuly(){
        this.paragraph_successMessage.should('be.visible').and('contain', 'Success! Your details have been submitted successfully.')
        this.btn_returnToHomePage.should('be.visible').and('contain', "Home")
    }
}
export const onContactUs = new PO_ContactUsPage();