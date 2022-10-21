/// <reference types="cypress" />

describe('header', () => {
  it('displays the header', () => {
    cy.visit('/')

    cy.getBySel('logo').click().location('pathname').should('eq', '/')

    cy.get('[data-test="all"]')
      .click()
      .location('pathname')
      .should('eq', '/search')
  })

  it('should return the right product when typing search', () => {
    cy.visit('/')

    cy.getBySel('search-input').eq(0).type('jeans{enter}')
    cy.get('[data-test="product-name"]').should('contain', 'Super Jeans')
  })
})
