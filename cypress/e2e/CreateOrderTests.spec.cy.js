/// <reference types="cypress" />

import { testHelpers} from '../support/helpers';
import { navigateTo } from '../support/PageObjects/Navigation.spec';
import { onShoppingCheckoutPage } from '../support/PageObjects/PO_ShoppingCheckoutPage';
import { onHomePage } from '../support/PageObjects/PO_HomePage.spec';
import { onLoginPage } from '../support/PageObjects/PO_LoginPage.spec';
import { onShoppingCartPage } from '../support/PageObjects/PO_ShoppingCartPage';
import { onSimpleProductPage } from '../support/PageObjects/PO_SimpleProductPage';
import { onShoppingPaymentCardPage } from '../support/PageObjects/PO_ShoppingPaymentCardPage';
import { onShoppingSuccessPage } from '../support/PageObjects/PO_ShoppingSuccessPage';

describe ("Create order tests with logged in user", () => {
   beforeEach("login user into accout", () => {
      cy.session('loginTest', () => {
         navigateTo.loginPageUrl
         testHelpers.loginUser();
      })
   })
   it.skip("Create order with logged in user - example WITHOUT Page Objects", () => {
    navigateTo.homePageUrl
    //click of first product -> view product button
    cy.get('.features_items').find(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    //click add to cart
    cy.get(':nth-child(5) > .btn').click()
    //check modal is displayed
    cy.get('.modal-content').should('be.visible')
    //click on modal "continue shopping button"
    cy.get('.modal-content').find('.modal-footer > .btn').click()
   //click add to cart again
    cy.get(':nth-child(5) > .btn').click()
    //click view cart in modal
    cy.get('.modal-content').find('u').contains('View Cart').click()
    // check table with products in cart
    cy.get('#cart_info').should('be.visible')
      .and('contain', "Item")
      .and('contain', "Description")
      .and('contain', "Price")
      .and('contain', "Quantity")
      .and('contain', "Total")
      .and('contain', "Blue Top")
   // proceed to checkout
   cy.get('.col-sm-6 > .btn').click()

   //CHECKOUT PAGE
   //check address details heading
   cy.get(':nth-child(2) > .heading').should('contain', 'Address Details')
   //check Delivery address header
   cy.get('#address_delivery').should('contain', 'Your delivery address')
   // check Your Billing address header
   cy.get('#address_invoice').should('contain', 'Your billing address')
   // check review your order header
   cy.get(':nth-child(4) > .heading').should('contain', 'Review Your Order')
   //check table with product
   cy.get('#cart_info').should('be.visible')
   .and('contain', "Item")
   .and('contain', "Description")
   .and('contain', "Price")
   .and('contain', "Quantity")
   .and('contain', "Total")
   .and('contain', "Blue Top")

   // add test comment
   cy.get('.form-control').should('be.visible').clear().type('Test comment for order')
   // click place order
   cy.get(':nth-child(7) > .btn').contains('Place Order').click()

   // PAYMENT CARD PAGE
   //check heading payment
   cy.get('.heading').should('contain', 'Payment')

   // Name on card label and field
   cy.get(':nth-child(2) > .col-sm-12 > .control-label').contains('Name on Card')
   cy.get('[data-qa="name-on-card"]').clear().type('testCardNumber')
   // Card number label and field
   cy.get(':nth-child(3) > .col-sm-12 > .control-label').contains('Card Number')
   cy.get('[data-qa="card-number"]').clear().type('111222333')
   // CVC label and field
   cy.get('.cvc > .control-label').contains('CVC')
   cy.get('[data-qa="cvc"]').clear().type('311')
   // Expiration label and fields: MM and YYY
   cy.get(':nth-child(2) > .control-label').contains('Expiration')
   cy.get('[data-qa="expiry-month"]').clear().type('05')
   cy.get('[data-qa="expiry-year"]').clear().type('2025')
   // Pay and Confirm Order
   cy.get('[data-qa="pay-button"]').click()

   //SUCCESS PAGE
   //order placed header
   cy.get('[data-qa="order-placed"]').contains('Order Placed!')
   // order placed paragraph text
   cy.get('.col-sm-9 > p').contains('Congratulations! Your order has been confirmed!')
   // download invoice button
   cy.get('.col-sm-9 > .btn-default').contains('Download Invoice')
   // continue button
   cy.get('[data-qa="continue-button"]').contains('Continue').click()

   // Home page visible
   onHomePage.verifyHomePageElements_ForLoggedInUser()
   })

   it.only("Create order with logged in user - example WITH Page Objects", () => {
    navigateTo.homePageUrl
    //click of first product -> view product button
    onHomePage.btn_FirstProductOnList.should('contain', 'View Product').click();
    //click add to cart
    onSimpleProductPage.btn_addToCart.click()
    //check modal is displayed
    onSimpleProductPage.modal_ProductAddedToCart.should('be.visible')
    //click on modal "continue shopping button"
    onSimpleProductPage.modalBtn_ContinueShopping.click()
   //click add to cart again
    onSimpleProductPage.btn_addToCart.click()
   //click view cart in modal
   onSimpleProductPage.modalBtn_ViewCart.contains('View Cart').click()
    // check table with products in cart
    onShoppingCartPage.tableHeadersTextCheck()
   // proceed to checkout
   onShoppingCartPage.btn_ProceedToCheckout.click()

   //CHECKOUT PAGE
   //check address details heading
   onShoppingCheckoutPage.section_AddressDetails.should('contain', 'Address Details')
   //check Delivery address header
   onShoppingCheckoutPage.section_AddressDelivery.should('contain', 'Your delivery address')
   // check Your Billing address header
   onShoppingCheckoutPage.section_AddressInvoice.should('contain', 'Your billing address')
   // check review your order header
   onShoppingCheckoutPage.section_ReviewYourOrder.should('contain', 'Review Your Order')
   //check table with product
   onShoppingCartPage.tableHeadersTextCheck()
   // add test comment
   onShoppingCheckoutPage.txt_CommentBox.clear().type('Test comment for order')
   // click place order
   onShoppingCheckoutPage.btn_PlaceOrder.contains('Place Order').click()

   // PAYMENT CARD PAGE
   //check heading payment
   onShoppingPaymentCardPage.header_Payment.should('contain', 'Payment')
   // Name on card label and field
   onShoppingPaymentCardPage.lab_NameOnCard.contains('Name on Card')
   onShoppingPaymentCardPage.txt_NameOnCard.clear().type('testCardNumber')
   // Card number label and field
   onShoppingPaymentCardPage.lab_CardNumber.contains('Card Number')
   onShoppingPaymentCardPage.txt_CardNumber.clear().type('111222333')
   // CVC label and field
   onShoppingPaymentCardPage.lab_CVC.contains('CVC')
   onShoppingPaymentCardPage.txt_CVC.clear().type('311')
   // Expiration label and fields: MM and YYY
   onShoppingPaymentCardPage.lab_Expiration.contains('Expiration')
   onShoppingPaymentCardPage.txt_Expiration_MM.clear().type('05')
   onShoppingPaymentCardPage.txt_Expiration_YYYY.clear().type('2025')
   // Pay and Confirm Order
   onShoppingPaymentCardPage.btn_PayAndConfirmOrder.click()

   //SUCCESS PAGE
   //order placed header
   onShoppingSuccessPage.header_OrderPlaced.contains('Order Placed!')
   // order placed paragraph text
   onShoppingSuccessPage.paragraph_Congratulations.contains('Congratulations! Your order has been confirmed!')
   // download invoice button
   onShoppingSuccessPage.btn_DownloadInvoice.contains('Download Invoice')
   // continue button
   onShoppingSuccessPage.btn_Continue.contains('Continue').click()
   // Home page visible
   onHomePage.verifyHomePageElements_ForLoggedInUser()
   })
})