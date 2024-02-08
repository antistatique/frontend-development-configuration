/* globals cy */

describe('Homepage', () => {
  it('Pages Router - should display the count', () => {
    cy.visit('/pages-router')
    cy.get('#count').should('have.length', 1);
  });

  it('Pages Router - should increase the count', () => {
    cy.visit('/pages-router')
    cy.get('#counter > button:last-child').click({ force: true });
    cy.get('#count').should('contain', '1');
  });

  it('Pages Router - should decrease the count', () => {
    cy.visit('/pages-router')
    cy.get('#counter > button:first-child').click({ force: true });
    cy.get('#count').should('contain', '-1');
  });

   it('App Router - should display the count', () => {
    cy.visit('/app-router')
    cy.get('#count').should('have.length', 1);
  });

  it('App Router - should increase the count', () => {
    cy.visit('/app-router')
    cy.get('#counter > button:last-child').click({ force: true });
    cy.get('#count').should('contain', '1');
  });

  it('App Router - should decrease the count', () => {
    cy.visit('/app-router')
    cy.get('#counter > button:first-child').click({ force: true });
    cy.get('#count').should('contain', '-1');
  });
});
