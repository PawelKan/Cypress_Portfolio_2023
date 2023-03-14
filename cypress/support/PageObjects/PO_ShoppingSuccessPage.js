/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_ShoppingSuccessPage{
    get header_OrderPlaced(){ return cy.get('[data-qa="order-placed"]')  }
    get paragraph_Congratulations() {return cy.get('.col-sm-9 > p') }
    get btn_DownloadInvoice() { return cy.get('.col-sm-9 > .btn-default') }
    get btn_Continue() { return cy.get('[data-qa="continue-button"]') }


}
export const onShoppingSuccessPage = new PO_ShoppingSuccessPage();