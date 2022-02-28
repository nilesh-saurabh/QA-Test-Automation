/// <reference types = "cypress"/>

const header_value = '.sc-giAqHp'
const message_text = '[data-testid="welcome"]'
const add_button = '[data-testid="add"]'
const create_todo_field = '[data-testid="new-todo"]'
const create_todo = '[data-testid="submit-newTask"]'
const pagination_link = '.sc-hBMUJo'
const checkbox_todo = '[data-testid="complete-task"]'
const delete_todo = '[data-testid="delete"]'

class homepage {

    homepage_verification() {

        cy.get(header_value).should('be.visible');

    }

    welcome_message_verification() {

        const d = new Date();

        cy.log(d.getHours());

        if (Number(5) <= Number(d.getHours()) && Number(d.getHours()) <= Number(12)) {

            cy.get(message_text).should('contain.text', 'Good morning')
        }

        if (Number(12) < Number(d.getHours()) && Number(d.getHours()) <= Number(17)) {

            cy.get(message_text).should('contain.text', 'Good afternoon')
        }

        if (Number(17) < Number(d.getHours())) {

            cy.get(message_text).should('contain.text', 'Good Evening')
        }

        if (Number(0) < Number(d.getHours()) && Number(d.getHours()) < Number(5)) {
            cy.get(message_text).should('contain.text', 'Time to sleep')
        }

        cy.get(message_text).then(function ($elem) {

            let name;
            const welcome_message = $elem.text();
            const extracted_text = welcome_message.split(" ")
            if (extracted_text.length == 3) {
                name = extracted_text[2]
            }
            else {
                name = extracted_text[3]
            }

            if (!name || name.length < 2 || name.includes('@') || name.includes('.')) {
                cy.get(message_text).should('contain.text', 'user')
            }

            else {
                cy.get(message_text).should('contain.text', name)
            }
        })

    }

    create_todo(todo_list, todo_count) {

        for (let i = 0; i < todo_count; i++) {

            cy.get(add_button).click();
            cy.get(create_todo_field).should('be.visible');
            cy.get(create_todo_field).type(todo_list).get(create_todo).click()
        }

        if (todo_count > 5) {

            cy.get(pagination_link).should('be.visible')
        }

        else {
            cy.get(pagination_link).should('not.exist')
        }
    }

    check_todo() {
        cy.get(checkbox_todo).eq(0).check()
    }

    delete_todo() {
        cy.get(delete_todo).eq(0).click()
    }

}

export default homepage;