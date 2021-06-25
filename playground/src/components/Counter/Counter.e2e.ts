/* globals cy */

describe('Counter', () => {
  beforeEach(() => cy.visitStorybook('components-counter--default'));

  it('should display the count', () => {
    cy.get('#counter > span').should('have.length', 1);
  });

  it('should increase the count', () => {
    cy.get('#counter > button:last-child').click();
    cy.get('#counter > span').should('contain', '1');
  });

  it('should decrease the count', () => {
    cy.get('#counter > button:first-child').click();
    cy.get('#counter > span').should('contain', '-1');
  });
});
