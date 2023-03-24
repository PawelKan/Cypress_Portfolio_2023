/// <reference types="cypress" />

import { testHelpers } from "../../support/helpers";
import { onHomePage } from "../../support/PageObjects/PO_HomePage.spec";
import { testData } from "../../support/PageObjects/TestData.spec";

const fixturesFolderPath = "cypress/a_tmp_testLogs/"

describe ("API: Create and delete user,", () => {
   before("Save user mail and pass for test", () => {
      cy.writeFile(fixturesFolderPath + "usersUsed.txt",
      "USER MAIL: " + testData.userDataForApiTesting.email + " USER PASS: " + testData.userDataForApiTesting.password + "\n",{
         encoding: 'utf-8',
         flag: 'a+'
      })

      console.log("USER MAIL " + testData.userDataForApiTesting.email)
      console.log("USER PASS " + testData.userDataForApiTesting.password)
   })

   it("API TEST: Create new User Account API", () => {
      cy.request({
         method: "POST",
         url: 'https://automationexercise.com/api/createAccount',
         headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
         body: {
            name: "AsdfName", 
            email: testData.userDataForApiTesting.email,
            password: testData.userDataForApiTesting.password,
            title: 'Mr',
            birth_date: "15",
            birth_month: "3", 
            birth_year: "1990", 
            firstname: "asdfFirstName", 
            lastname: "asdfLastName", 
            company: "asdfCompany", 
            address1: "asdfAddress1", 
            address2: "asdfAddress2", 
            country: "India", 
            zipcode: "33-333", 
            state: "asdfState", 
            city: "asdfCity", 
            mobile_number: "999888777"
         }       
      }).then( response => {
         expect(response.status).to.eq(200);
         expect(response.body).to.contain("{\"responseCode\": 201, \"message\": \"User created!\"}")
         expect(response.requestBody).not.empty;
         cy.writeFile(fixturesFolderPath + "createAccountResponse.json", response)
      })
   })

   it("API TEST: Get user details by email", () =>{
      cy.request({
         url: "https://automationexercise.com/api/getUserDetailByEmail?email="+testData.userDataForApiTesting.email,
         method: "GET",
      }).then( response => {
         expect(response.status).to.eq(200)
         expect(response.allRequestResponses[0]["Response Status"]).eq(200)
         cy.writeFile(fixturesFolderPath + "getAccountResponse.json", response)
      })
   })

   it("API TEST: Delete User Account with email and password", () => {
      cy.request({
         url: "https://automationexercise.com/api/deleteAccount",
         method: "DELETE",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded"
         },
         body: {
            email: testData.userDataForApiTesting.email,
            password: testData.userDataForApiTesting.password,
         }
      }).then( response => {
            console.log(response)
            expect(response.status).to.eq(200);
            expect(response.body).to.contain("{\"responseCode\": 200, \"message\": \"Account deleted!\"}")
            cy.writeFile(fixturesFolderPath + "deleteAccountResponse.json", response)
         })
   })
   
})

describe("API - Login examples with UI HomePage check", () => {
   it("Try to login ONLY with REQUESTS", () => {
      //Application uses Double-Submit Cookie 
      cy.request("/login").its('body').then( (html) => {
         const $input = Cypress.$('<html/>')
         .html(html)
         .find('[name=csrfmiddlewaretoken]')
         Cypress.env('csrfmiddlewaretoken', $input.attr('value'))
      })
      .then(() => {
         // Get cookie for csrftoken (which is different thant in csrfmiddlewaretoken)
         cy.getCookie("csrftoken").then((cookie) => {
            Cypress.env("csrftoken", cookie.value)
         })
      }).then(() => {
         testHelpers.logStep("SEND REQUEST TO LOGIN USER WITH VALEUS" + 
         `csrfmiddlewaretoken = ${Cypress.env('csrfmiddlewaretoken')}`) +
         `csrfCookie = ${Cypress.env("csrftoken")}`

         cy.setCookie('csrftoken', Cypress.env("csrftoken"))

         cy.request({
            url: "https://automationexercise.com/login",
            method: "POST",
            failOnStatusCode: false,
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
               referer: "https://automationexercise.com/login",
               cookie: `csrftoken= ${Cypress.env("csrftoken")}`
            },
            body: {
               email: "usernameTest@testpracticetest.com",
               password: "Test12345!@#",
               csrfmiddlewaretoken: Cypress.env('csrfmiddlewaretoken')
            }
         })
      })
      cy.visit('/')
      onHomePage.verifyHomePageElements_ForLoggedInUser();
   })
})