/// <reference types="cypress" />

describe('User should be able', () => {

    before(() => {
      cy.visit('http://localhost:1667/#/')
    })
    //Username: user32
    //Password: Userpass1
    //Email: user32@hotmail.com

    it('to login', () => {
        //redirect to login form
        cy.get(':nth-child(2) > .nav-link').click();
        //filling data and click on [Sign in]
        cy.get(':nth-child(1) > .form-control').type('user32@hotmail.com');
        cy.get(':nth-child(2) > .form-control').type('Userpass1');
        cy.get('.btn').click();
    })

    it('User logged in', () => {
        // test for successful login
        cy.get('.navbar').contains('user32').should('exist');
    })
});