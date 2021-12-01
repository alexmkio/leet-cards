describe('Landing user flows', () => {

  beforeEach(() => {
    cy.loadHome();
  });

  it('The url should be url/', () => {
    cy.url().should('include', '/')
  });

  it.skip('The page should have a header', () => {
    cy.get('h1').contains('Welcome to LEET CARDS')
  })

});