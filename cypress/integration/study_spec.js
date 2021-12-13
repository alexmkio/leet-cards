describe('Study page user flows', () => {

  beforeEach(() => {
    cy.loadStudyPage()
  })

  it("Each card has a question", () => {
    cy.get('article').eq(0).get('dl').contains('Question').parent().children('dd')
      .contains('Is your name Alex?')
  })

  it("Each card has an answer", () => {
    cy.get('article').eq(0).trigger('mouseover').get('dl').contains('Answer').parent().children('dd')
    .contains('Yes')
  })

  it("Each card has a button to a page to edit the card's information", () => {
    cy.get('article').eq(0).trigger('mouseover').get('button').contains('Edit Answer').parent()
      .should('have.attr', 'href')
      .and('includes', '/edit/1')
  })

  it("Each card has a button to a page to delete the card", () => {
    cy.get('article').eq(0).trigger('mouseover').get('button').contains('Delete Card')
  })

})