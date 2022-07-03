/// <reference types="cypress" />
import userData from '../../fixtures/userdata.json'
import alertText from '../../fixtures/alertstext.json'

describe('Login', () => {

    beforeEach(function () {
        cy.visit('/');
    })

    it('Registered user is able to login', () => {
        cy.login(userData.userEmail, userData.userPassword)
        cy.verifyDashboardPageIsOpened(userData.userName)
    })

    it('User is be able to Logout', () => {
        cy.login(userData.userEmail, userData.userPassword)
        cy.logout()
        cy.get('p.cbox_messagebox').should('contain.text', alertText.youHaveSuccessfullyLoggedOut)
        cy.verifyLoginPageIsOpened()
    })

    it('Non-existing User is not able to Login', () => {
        cy.login(userData.incorrectUserEmail, userData.incorrectUserPassword)
        cy.get('div.cbox_messagebox_error').should('be.visible')
        cy.contains(alertText.incorrectUserNameOrPassword).should('be.visible')
        cy.url().should('include', '/login')
    })
})
