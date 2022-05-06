/// <reference types="Cypress" />

beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', { fixture: './../../fixtures/posts.json' })
    cy.visit('/posts');
})

it('user click on odd button to show only odd posts', () => {
    cy.get('#oddAction').click();
    cy.get('#post_2').should('not.exist');
})

it('user search with sunt text', () => {
    cy.get('#search').type('sunt');
    cy.findByRole('button', {name: /Search Posts/i}).click();
    cy.get('#post_85').should('exist');
     
})