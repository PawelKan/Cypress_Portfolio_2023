/// <reference types="cypress" />

describe ("Api Tests Examples", () => {
   it.only("Create new account with API", () => {
      cy.request({
         method: "POST",
         url: 'https://automationexercise.com/api/createAccount',
         headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
         body: {
            name: "AsdfName", 
            email: "asdf@asdftestaaaadaaaaaaaaabaaaaaaaaa.pl",
            password: 'asdf',
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
      })
   })

   it.skip("Create new account with POST FROM UI", () => {
      cy.request({
         method: "POST",
         url: "https://automationexercise.com/signup",
         failOnStatusCode: false,
         body: {
            csrfmiddlewaretoken: "fJ8LCI21jGJ9FZINRTfiPMczVN3R1U059VjbR0iK2oDQGCnuaQn28SLPBSI8lGCw",
            name: "AsdfName",
            email: "asdf@asdftest.test",
            form_type: "signup"
         }
      }).then( (response) => {
         //expect(response.body.statusCode).to.equal(200);
         
         cy.request
         ({
            method: "POST",
            url: 'https://automationexercise.com/signup',
            failOnStatusCode: false,
            headers: {
               cookie: "csrftoken=vzCcFgEz3TxYQ4PCKHgEv48QqBVJGHhApUakBXx4LkXPehcLCOPm1t9d5AGsob1t",
               dnt: 1,
               "sec-gpc": 1,
               "upgrade-insecure-requests": 1
            },
            body: {
               csrfmiddlewaretoken: "pBWcezxgDKtgYFyD0dcfy5BLeJHj7iSrjWukagqLlbT7mSVMSkLX4uC8TIs2PMCk",
               name: "AsdfName", 
               email_address: "asdf@asdftest.test",
               password: 'asdf',
               days: "15",
               months: "3", 
               years: "1990", 
               newsletter: "1",
               optin: "1",
               first_name: "asdfFirstName", 
               last_name: "asdfLastName", 
               company: "asdfCompany", 
               address1: "asdfAddress1", 
               address2: "asdfAddress2", 
               country: "India", 
               state: "asdfState", 
               city: "asdfCity", 
               zipcode: "33-333", 
               mobile_number: "888999000",
               form_type: "create_account"
            },         
         })
         .then(response  => {
            console.log(response)
            expect(response.body.statusCode).to.equal(302);
         })
      })

      
   })
})