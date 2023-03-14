/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_SimpleProductPage{

   get btn_addToCart(){ return cy.get(':nth-child(5) > .btn') }
   get modal_ProductAddedToCart() { return cy.get('.modal-content') }
   get modalBtn_ContinueShopping() { return this.modal_ProductAddedToCart.find('.modal-footer > .btn') }
   get modalBtn_ViewCart() { return this.modal_ProductAddedToCart.find('u') }

}
export const onSimpleProductPage = new PO_SimpleProductPage();