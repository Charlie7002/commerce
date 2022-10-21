describe('shopping-cart', () => {
  it('should add a product to the shopping cart', () => {
    cy.visit('/')
    cy.getBySel('product-tag').eq(1).click()
    cy.contains('Add To Cart', { timeout: 10000 }).click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })
})
