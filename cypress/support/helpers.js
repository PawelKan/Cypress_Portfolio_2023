/// <reference types="cypress" />

/// <reference types="cypress" />

export class TestHelpers{

    logStep(text){ cy.log("**" + text + "**") }

}
export const testHelpers = new TestHelpers();