/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_ShoppingCheckoutPage{
    
  get section_AddressDetails(){ return cy.get(':nth-child(2) > .heading')  }
  get section_AddressDelivery() { return cy.get('#address_delivery') }
  get section_AddressInvoice() { return cy.get('#address_invoice') }
  get section_ReviewYourOrder() { return cy.get(':nth-child(4) > .heading') }
  get txt_CommentBox() { return cy.get('.form-control') }
  get btn_PlaceOrder() { return cy.get(':nth-child(7) > .btn') }

    tableHeadersTextCheck(){
      this.table_CartProductInfo.should('be.visible')
      .and('contain', "Item")
      .and('contain', "Description")
      .and('contain', "Price")
      .and('contain', "Quantity")
      .and('contain', "Total")
      .and('contain', "Blue Top")
    }
}
export const onShoppingCheckoutPage = new PO_ShoppingCheckoutPage();