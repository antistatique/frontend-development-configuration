/* globals cy */

describe('Homepage', () => {
  it('should perform basic google search', () => {
    cy.visit('/');
    cy.get('#count').should('have.length', 1);
  });
});
