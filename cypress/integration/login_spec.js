const { cyan } = require("@material-ui/core/colors")

describe("Login" , function()
{
    it("login " , function(){
        cy.visit('http://localhost:3000/signin')
        // cy.get('input:first').should('have.attr','placeholder','Email').type('admin1@gmail.com')
        cy.get('input[placeholder="LPassword"]').type('ashish')
        cy.get('input[placeholder="LPassword"]').type('ashish')
        cy.get('button').contains('Sign In').click();

    })

})   



