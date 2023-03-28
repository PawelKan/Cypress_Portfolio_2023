/// <reference types="cypress" />

import { testHelpers } from "../helpers"

export class PO_HomePageContent{

    get footerSection() { return cy.get('#footer') }
    get header_Subscription() { return cy.get('.single-widget > h2') }
    get txt_YourEmailAddress() { return cy.get('#susbscribe_email')}
    get btn_Subscribe() { return cy.get('#subscribe') }
    get paragraph_GetMostRecent() { return cy.get('.searchform > p')}
    get paragrpah_Copyright() { return     cy.get('.footer-bottom') }

    verifyHomePageFooterElements(){
        this.header_Subscription
            .should('be.visible')
            .and('contain', "Subscription")

        this.txt_YourEmailAddress
            .should('be.visible')
            .invoke('attr', 'placeholder').should('contain', 'Your email address')

        this.btn_Subscribe
            .should('be.visible')

        this.paragraph_GetMostRecent
            .should('be.visible')
            .and('contain', 'Get the most recent updates from')
            .and('contain', 'our site and be updated your self...')

        this.paragrpah_Copyright
            .should('be.visible')
            .and('contain', "Copyright © 2021 All rights reserved")
    }
}
export const onHomePageContent = new PO_HomePageContent();