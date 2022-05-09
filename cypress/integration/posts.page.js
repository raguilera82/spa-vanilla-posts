/// <reference types="Cypress" />

beforeEach(() => {

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {fixture: './../../fixtures/posts.json'})

})

it('user click on odd button to show only odd posts', () => {

    cy.visit('/posts');
    cy.get('#oddAction').click();
    cy.wait(0);
    cy.get('#post_2').should('not.exist');

})