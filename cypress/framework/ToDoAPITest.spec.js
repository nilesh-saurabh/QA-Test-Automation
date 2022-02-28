/// <reference types="Cypress"/>

describe("ToDo API Test", function () {

    let access_token;
    let created_id;

    beforeEach(function () {

        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function (data) {
            this.data = data;
        });

    })

    it("Task 1 Api_login", function () {
        cy.request({
            method: 'POST',
            url: Cypress.config("apibaseUrl") + '/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {

                "email": this.data.username,
                "password": this.data.password
            },
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.firstname).to.not.eq(null)
            let token_value = (res.body)
            access_token = token_value['access_token']
        })
    })

    it("Task 2 Create_Todo", function () {
        cy.request({
            method: 'POST',
            url: Cypress.config("apibaseUrl") + '/tasks',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: {

                "item": this.data.todo_list,
                "isCompleted": false
            },
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.addedTask.isCompleted).to.eq(false)
            expect(res.body.addedTask._id).to.not.eq(null)
            let id = (res.body)
            created_id = id.addedTask._id;
        })
    })

    it("Task 3 Complete_Todo", function () {
        cy.request({
            method: 'PUT',
            url: Cypress.config("apibaseUrl") + '/tasks/' + created_id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: {

                "item": this.data.todo_list,
                "isCompleted": true
            },
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.updatedTask.isCompleted).to.eq(true)
            expect(res.body.updatedTask._id).to.eq(created_id)
            expect(res.body.updatedTask.item).to.eq(this.data.todo_list)
        })
    })

    it("Task 4 Delete_Todo", function () {
        cy.request({
            method: 'DELETE',
            url: Cypress.config("apibaseUrl") + '/tasks/' + created_id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.deletedTask.isCompleted).to.eq(true)
            expect(res.body.deletedTask._id).to.eq(created_id)
            expect(res.body.deletedTask.item).to.eq(this.data.todo_list)
            expect(res.body.deletedTask.userID).to.not.eq(null)
        })
    })

});