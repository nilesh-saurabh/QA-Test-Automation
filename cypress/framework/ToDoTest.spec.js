import helper from "../helpers/helper";
import loginpage from '../helpers/PageObject/loginpage';
import homepage from "../helpers/PageObject/homepage";
const objhelper = new helper();
const objloginpage = new loginpage();
const objhomepage = new homepage();


describe("ToDo E2E Automation Test", function() {

    beforeEach(function() {
        
        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function(data) {
            this.data = data;
        });

        objhelper.visit_homepage()
      
        }
    )

    it("Task 1",function () {
      
        objloginpage.login(this.data.username, this.data.password),
        objhomepage.homepage_verification();
        objhomepage.welcome_message_verification();
        objhomepage.create_todo(this.data.todo_list, this.data.todo_count);
        objhomepage.check_todo();
        objhomepage.delete_todo();
        
    })

});