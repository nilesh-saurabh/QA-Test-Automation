/// <reference types = "cypress"/>

import { not } from "joi";

const username_field = '#login'
const password_field = '[data-testid="password"]'
const login_button = '[data-testid="submit"]'

class loginpage {

    login(username, password) {
        cy.get(username_field).type(username)
        cy.get(password_field).type(password)
        cy.get(login_button).click()
    }

}

export default loginpage;