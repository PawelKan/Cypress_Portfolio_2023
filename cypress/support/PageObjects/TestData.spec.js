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

}
export const testData = new TestData();