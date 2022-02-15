describe('test change class with scroll', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('check', () => {
    cy.get('#class-scroll-test');
  })
})
