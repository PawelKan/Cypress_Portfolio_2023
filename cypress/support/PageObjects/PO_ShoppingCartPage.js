/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_ShoppingCartPage{
    get table_CartProductInfo(){ return cy.get('#cart_info')  }
    get btn_ProceedToCheckout() {return cy.get('.col-sm-6 > .btn') }

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
export const onShoppingCartPage = new PO_ShoppingCartPage();