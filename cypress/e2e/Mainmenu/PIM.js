describe("Verfiy the add employee flow", () =>{

    it("verify the PIM in main menu" , () =>{

            cy.visit('web/index.php/auth/login')
            cy.get('input[name ="username"]').type('Admin')
            cy.get('input[name="password"]').type('admin123')
            cy.get('button[type="submit"]').click()
            cy.contains("Dashboard").should('be.visible')

            cy.get('div.oxd-sidepanel-body').contains('PIM').click()

            cy.get('.oxd-topbar').contains('PIM').should('be.visible')

            //or

            cy.url().should("include", "/web/index.php/pim/viewEmployeeList")

            cy.get('.orangehrm-paper-container').contains(' Add ').click()

            cy.contains('Add Employee').should('be.visible')
    })
})