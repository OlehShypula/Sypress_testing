/// <reference types="cypress" />

describe('User should be able', () => {
    let user;

    before(() => {
      cy.visit('http://localhost:1667/#/')
      cy.task("freshUser").then((object) => {
        user = object;
    });
    })

    it('Registration new account', () => {
        //redirect to register form
        cy.get(':nth-child(3) > .nav-link').click();
        //filling data and click on [Sign up]
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();
    })

    it('User logged in', () => {
        //tests for successful registration
        cy.get('.swal-modal').contains('Your registration was successful!').should('exist');
        cy.get('.swal-button').click();
        cy.get(':nth-child(4) > .nav-link').contains(user.username).should('exist');
    })
});