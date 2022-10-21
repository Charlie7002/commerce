/// <reference types="cypress" />

describe('home page', () => {
  it('displays home page with the 3 products', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-price"]').should('contain', '120')
        cy.get('[data-test="product-name"]').should('contain', 'Super Jeans')
      })

    cy.get('[data-test="product-tag"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-price"]').should('contain', '2,000')
        cy.get('[data-test="product-name"]').should('contain', 'Amazing truc')
      })

    cy.get('[data-test="product-tag"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-price"]').should('contain', '5')
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Wonderful trucmuche'
        )
      })
  })
})
