const { beforeEach } = require("mocha");

describe("check the main menu iteam ", ()=> {


    beforeEach(" login to the pages", () =>{

        cy.writeFile('cypress/fixtures/headerText.txt', '');

        cy.visit('web/index.php/auth/login')
    cy.get('input[name ="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()


        
    })

    it("Verfiy the each menu iteam by click", ()=>{

        const menu = {
            menu1: "Admin",
            menu2: "PIM",
            menu3: "Leave",
            menu4: "Time",
            menu5: "Recruitment",
            menu6: "My Info",
            menu7: "Performance",
            menu8: "Dashboard",
            menu9: "Directory",
            menu10: "Claim",
            menu11: "Buzz",

        }

    for (let i in menu){

        cy.contains(menu[i]).should('be.visible').click()
        cy.get('.oxd-topbar-header-title').invoke('text').then((headerText) => {
            // Print the header text to the console
            cy.log(headerText);

            // Optionally, you can write this text to a file or use it in assertions
            cy.writeFile('cypress/fixtures/headerText.txt', headerText + '\n',{ flag: 'a+'});
        //cy.screenshot(menu[i])
        })
    }
    })

    it("Verfiy the each menu iteam by click", ()=>{

        cy.get('.oxd-main-menu > li').then($menuItems => {
        const menuItems = $menuItems;

        Cypress._.each(menuItems, $menuItem => {
            cy.wrap($menuItem).find('a').click();

        cy.contains(menu[i]).should('be.visible').click()
        cy.get('.oxd-topbar-header-title').invoke('text').then((headerText) => {
            // Print the header text to the console
            cy.log(headerText);

            // Optionally, you can write this text to a file or use it in assertions
            cy.writeFile('cypress/fixtures/headerText.txt', headerText + '\n',{ flag: 'a+'});
        //cy.screenshot(menu[i])
        })
    
    })

    })
})

})