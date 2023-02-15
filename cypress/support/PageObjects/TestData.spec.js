/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

export class TestData{

    existingUser = {
            username: "usernameTest", 
            email : "usernameTest@testpracticetest.com",  
            password : "Test12345!@#"
        }

}
export const testData = new TestData();