/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class PO_RegisterPage{

    get header_EnterAccountInformation(){ return cy.get(':nth-child(1) > b') }
    get radio_Mr(){ return cy.get('#id_gender1') }
    get radio_Mrs(){ return cy.get('#id_gender2') }
    get txt_Name(){ return cy.get('[data-qa="name"]') }
    get txt_Email(){ return cy.get('[data-qa="email"]') }
    get txt_Password(){ return cy.get('[data-qa="password"]') }
    get list_dobDay(){ return cy.get('[data-qa="days"]') }
    get list_dobMonth(){ return cy.get('[data-qa="months"]') }
    get list_dobYear(){ return cy.get('[data-qa="years"]') }
    get chk_SignUpForNewsletter() { return cy.get('#newsletter') }
    get chk_ReceiveSpecialOfferFromOurPartners(){ return cy.get('#optin') }

    get header_AddressInformation(){ return cy.get('form > .title > b') }
    get txt_FirstName(){ return cy.get('[data-qa="first_name"]') }
    get txt_LastName(){ return cy.get('[data-qa="last_name"]') }
    get txt_Company(){ return cy.get('[data-qa="company"]') }
    get txt_Address(){ return cy.get('[data-qa="address"]') }
    get txt_Address2(){ return cy.get('[data-qa="address2"]') }
    get list_Country(){ return cy.get('[data-qa="country"]') }
    get txt_State(){ return cy.get('[data-qa="state"]') }
    get txt_City(){ return cy.get('[data-qa="city"]') }
    get txt_Zipcode(){ return cy.get('[data-qa="zipcode"]') }
    get txt_MobileNumber(){ return cy.get('[data-qa="mobile_number"]') }
    get btn_CreateAccount(){ return cy.get('[data-qa="create-account"]') }


    verifyRegisterFormFields(valueForName, valueForEmail){
        this.header_EnterAccountInformation.should('have.text', 'Enter Account Information')
        this.radio_Mr.should('be.visible')
        this.radio_Mrs.should('be.visible')

        this.txt_Name.should('be.visible').and('have.value', valueForName);
        this.txt_Email.should('be.visible').and('have.value', valueForEmail);
        this.txt_Email.should('be.visible')

        this.txt_Password.should('be.visible')

        this.list_dobDay.should('be.visible').and('contain', 'Day');
        this.list_dobMonth.should('be.visible').and('contain', 'Month');
        this.list_dobYear.should('be.visible').and('contain', 'Year');

        this.chk_SignUpForNewsletter.should('be.visible');
        this.chk_ReceiveSpecialOfferFromOurPartners.should('be.visible');


        this.header_AddressInformation.should('have.text', 'Address Information')

        this.txt_FirstName.should('be.visible')
        this.txt_LastName.should('be.visible')
        this.txt_Company.should('be.visible')
        this.txt_Address.should('be.visible')
        this.txt_Address2.should('be.visible')
        this.list_Country.should('be.visible').and('contain', 'India');
        this.txt_State.should('be.visible')
        this.txt_City.should('be.visible')
        this.txt_Zipcode.should('be.visible')
        this.txt_MobileNumber.should('be.visible')
        this.btn_CreateAccount.should('be.visible').and('have.text', 'Create Account');
    }
    
    verifyRegisterFormLabels(fixtureName){
        cy.fixture(fixtureName).then( labelFixture => {
            labelFixture.forEach(element => {
               const css = element.cssSelector
               const text = element.tekst
               cy.get(css).should('contain', text)
            });
         })
    }

}
export const onRegisterPage = new PO_RegisterPage();