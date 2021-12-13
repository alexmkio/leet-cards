describe('Add card user flows', () => {

  beforeEach(() => {
    cy.loadAddPage()
  })

  it("There is a body with a sub-header", () => {
    cy.get('h2')
      .contains('Create a new flash card')
  })

  it("If you don't add a category you receive an error", () => {
    cy.get('p').contains('Add category').click()
    cy.contains('Sorry, add a category first!')
  })

  it("Once you add a category the error goes away", () => {
    cy.get('input[id="category"]').type('something')
      .get('p').contains('Add category').click()
    cy.contains('Sorry, add a category first!').should('not.exist')
  })

  it("You can remove categories", () => {
    cy.get('input[id="category"]').type('something')
      .get('p').contains('Add category').click()
    cy.get('input[value="something"]').click()
    cy.contains('something').should('not.exist')
  })

  it("You can not submit the form if there aren't values for everything", () => {
    cy.get('textarea[id="question"]').type('I am a question')
    cy.get('p').contains('Create card').click()
    cy.contains('Sorry, fill out the form completely first!')

    cy.get('textarea[id="answer"]').type('I am an answer')
    cy.get('p').contains('Create card').click()
    cy.contains('Sorry, fill out the form completely first!')

    cy.get('select[id="stack"]').select('FE')
    cy.get('p').contains('Create card').click()
    cy.contains('Sorry, fill out the form completely first!')

    cy.get('input[id="category"]').type('something')
      .get('p').contains('Add category').click()
    cy.get('p').contains('Create card').click()
    cy.contains('Sorry, fill out the form completely first!').should('not.exist')
  })

  it("Once you submit the form the form resets", () => {
    cy.get('textarea[id="question"]').type('I am a question')
    cy.get('textarea[id="answer"]').type('I am an answer')
    cy.get('select[id="stack"]').select('FE')
    cy.get('input[id="category"]').type('something')
      .get('p').contains('Add category').click()
    cy.get('p').contains('Create card').click()
    
    cy.get('textarea[id="question"]').should('have.value', '')
    cy.get('textarea[id="answer"]').should('have.value', '')
    cy.get('select[id="stack"]').should('have.value', null)
    cy.get('input[id="category"]').should('have.value', '')
  })

  it("A submitted card shows up in your deck", () => {
    cy.get('textarea[id="question"]').type('I am a question')
    cy.get('textarea[id="answer"]').type('I am an answer')
    cy.get('select[id="stack"]').select('FE')
    cy.get('input[id="category"]').type('something')
      .get('p').contains('Add category').click()
    cy.get('p').contains('Create card').click()

    cy.get('div[class="cursor-pointer"]').parent().children().eq(2).children('a')
      .eq(2).click().wait(10)
    cy.get('article').eq(3).contains("Why'd you add me?")
  })

})