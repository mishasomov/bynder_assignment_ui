Cypress.Commands.add('login', (username, password) => {
     cy.get('#inputEmail').type(username);
     cy.get('#inputPassword').type(password);
     cy.contains('Login').click();
})