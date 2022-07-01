/// <reference types="cypress" />
import userData from '../../fixtures/userdata.json'
import alertText from '../../fixtures/alertstext.json'

describe('Login', () => {

  beforeEach(function() {
    cy.visit('/');
  })

  it('Registered user is able to login', () => {
    cy.get('#inputEmail').type(userData.userEmail);
    cy.get('#inputPassword').type(userData.userPassword);
    cy.contains('Login').click();
    cy.url().should('include', '/account/dashboard')

    cy.get('[data-ride="carousel"]').should('be.visible');
    cy.get('a.admin-dropdown.profile').should('contain.text', 'Misha Test')
    cy.get('a.cta-main').should('be.visible')
    cy.get('div.nav-bar-right.clearfix').should('be.visible')
    cy.get('a.account-logo').should('be.visible')
    cy.get('input#focus-new.search').should('be.visible')
  })

  it('User is be able to Logout', () => {
    cy.login(userData.userEmail, userData.userPassword)
    cy.get('a.admin-dropdown.profile').click()
    cy.contains('Logout').click()
    cy.get('p.cbox_messagebox')
    cy.get('#inputEmail').should('be.visible')
    cy.get('#inputPassword').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.get('a.admin-bar-logo').should('be.visible')
  })

  it('Non-existing User is not able to Login', () => {
    cy.login(userData.incorrectUserEmail, userData.incorrectUserPassword)
    cy.get('div.cbox_messagebox_error').should('be.visible')
    cy.contains(alertText.incorrectUserNameOrPassword).should('be.visible')
    cy.url().should('include', '/login')
  })
})
