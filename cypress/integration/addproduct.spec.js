describe("Visits Product ", function()
{
    it("visit to product tab ", function(){
    
        cy.visit('http://localhost:3000/signin')
        cy.get('input[placeholder="LPassword"]').type('ashish')
        cy.get('input[placeholder="LPassword"]').type('ashish')
        cy.get('button').contains('Sign In').click();
        cy.visit('http://localhost:3000/dashboard')
        cy.contains('Products').click();
         cy.get('button').contains('Add more products').click();

         cy.get('input[name="product_title"]').type('leather bag');
         cy.get('select[name="product_category"]').select('Clothings');
         cy.get('select[name="product_gender"]').select('Men');
         cy.get('textarea[name="description"]').type('goods');
         cy.get('input[name="price"]').type('1200');
         cy.get('input[name="stock"]').type('120');
         cy.get('button').contains('Add').click();
         cy.visit('http://localhost:3000/viewproducts')

     




    })

})