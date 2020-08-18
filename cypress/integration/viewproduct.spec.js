describe("Visits View Product page ", function()
{
    it("visit to view product tab ", function(){
    
        cy.visit('http://localhost:3000/')
        cy.get('a').contains('PRODUCTS').click();
        



    })

})