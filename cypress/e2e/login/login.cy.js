describe('login functionality checck', () => {

// adding postive and negtive test case for login page

  it('verfiy the login with valid data', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name ="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains("Dashboard")
  })
//
  it('verfiy the login with invalid username and valid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name ="username"]').type('Adin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains("Invalid credentials")
  })

  it('verfiy the login with valid username and invalid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name ="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin23')
    cy.get('button[type="submit"]').click()
    cy.contains("Invalid credentials")
  })

  it('verfiy the login with invalid username and invalid password', () => {
    cy.visit('web/index.php/auth/login')
    cy.get('input[name ="username"]').type('Adin')
    cy.get('input[name="password"]').type('adin123')
    cy.get('button[type="submit"]').click()
    cy.contains("Invalid credentials")
  })
})