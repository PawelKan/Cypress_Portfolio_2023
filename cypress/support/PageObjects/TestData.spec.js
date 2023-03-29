/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class TestData{

    existingUser = {
            username: "usernameTest", 
            email : "usernameTest@testpracticetest.com",  
            password : "Test12345!@#"
        }
    
    userDataForApiTesting = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    userDataForContactUsPage = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        subject: "temporarySubject",
        message: "Your message here will be added soon.",
    }

}
export const testData = new TestData();