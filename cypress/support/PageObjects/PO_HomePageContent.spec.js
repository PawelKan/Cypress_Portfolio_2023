/// <reference types="cypress" />

import { testHelpers } from "../helpers"

export class PO_HomePageContent{

    get section_Slider() { return cy.get('#slider') }
    get section_LeftMenuSidebar() { return cy.get('.left-sidebar') }
    get section_FeaturesItems() { return cy.get('.features_items') }
    get section_RecommendedItems() { return cy.get('.recommended_items') }
    
    get header_Category() { return this.section_LeftMenuSidebar.find(':nth-child(1)') }
    get header_Brands() { return this.section_LeftMenuSidebar.find('.brands_products > h2') }
    get header_FeaturesItems() { return this.section_FeaturesItems.find('.title') }
    get header_RecommendedItems() { return this.section_RecommendedItems.find('.title') }
    
    verifyHomePageHeaderElements(){
        this.header_Category
            .should('be.visible')
            .and('contain', "Category")

        this.header_Brands
            .should('be.visible')
            .should('contain', 'Brands')

        this.header_FeaturesItems
            .should('be.visible')
            .and('contain', 'Features Items')
            

        this.header_RecommendedItems
            .should('be.visible')
            .and('contain', "recommended items")
    }
}
export const onHomePageContent = new PO_HomePageContent();