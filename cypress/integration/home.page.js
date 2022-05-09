/// <reference types="Cypress" />

it('user click button on home page', () => {

    cy.visit('/', {
        onBeforeLoad(win) {
            cy.stub(win.console, 'log').as('consoleLog')
        }
    });
    cy.get('app-element').shadow().find('button').click();
    cy.get('@consoleLog').should('have.been.calledWith', 'hola desde el componente');

})