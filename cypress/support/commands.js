Cypress.Commands.add('login', (userEmail, password) => {
    cy.get('#inputEmail').type(userEmail);
    cy.get('#inputPassword').type(password);
    cy.contains('Login').click();
})

Cypress.Commands.add('logout', () => {
    cy.get('a.admin-dropdown.profile').click()
    cy.contains('Logout').click()
})

Cypress.Commands.add('verifyDashboardPageIsOpened', (userName) => {
    cy.url().should('include', '/account/dashboard')
    cy.get('[data-ride="carousel"]').should('be.visible');
    cy.get('a.admin-dropdown.profile').should('contain.text', userName)
    cy.get('a.cta-main').should('be.visible')
    cy.get('div.nav-bar-right.clearfix').should('be.visible')
    cy.get('a.account-logo').should('be.visible')
    cy.get('input#focus-new.search').should('be.visible')
})

Cypress.Commands.add('verifyLoginPageIsOpened', () => {
    cy.get('#inputEmail').should('be.visible')
    cy.get('#inputPassword').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.get('a.admin-bar-logo').should('be.visible')
    cy.url().should('include', '/login')
})