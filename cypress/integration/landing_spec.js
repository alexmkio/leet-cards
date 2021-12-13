describe('Landing user flows', () => {

  beforeEach(() => {
    cy.loadHome()
  })

  it("The page should have a header", () => {
    cy.get('h1').contains('Leet Cards')
  })

  it("The header is not a link on the home page", () => {
    cy.get('h1').parent().parent()
      .should('not.have.attr', 'href')
  })

  it("The header is a link home on other pages", () => {
    cy.visit('http://localhost:3000/study');
    cy.get('h1').parent().parent()
      .should('have.attr', 'href')
      .and('includes', '/')
  })

  it("There is an icon that lets you toggle light and dark themes", () => {
    cy.get('div[class="cursor-pointer"]').click()
      .get('html')
      .should('have.attr', 'class')
      .and('includes', 'dark')

      .get('div[class="cursor-pointer"]').click()
      .get('html')
      .should('have.attr', 'class')
      .and('does.not.include', 'dark')
  })

  it("The icon's have an aria label", () => {
    cy.get('div[class="cursor-pointer"]').children()
      .should('have.attr', 'aria-label')
      .and('includes', 'Change to')

      .get('div[class="cursor-pointer"]').click()
      .get('div[class="cursor-pointer"]').children()
      .should('have.attr', 'aria-label')
      .and('includes', 'Change to')
  })

  it.skip("The theme persists on reload thanks to localStorage", () => {
    
  })

  it.skip("If no theme or system preference it defaults to light theme", () => {
    
  })

  it.skip("If no theme, but system preference is dark then dark theme it is", () => {
    
  })

  it("There is a link to add a flash card", () => {
    cy.get('p').contains('Add a flash card').parent()
      .should('have.attr', 'href')
      .and('includes', '/add')
  })

  it("There are links to filter the flash cards", () => {
    cy.get('p').contains('FE').parent()
      .should('have.attr', 'href')
      .and('includes', '/study')

      .get('p').contains('BE').parent()
      .should('have.attr', 'href')
      .and('includes', '/study')

      .get('p').contains('FS').parent()
      .should('have.attr', 'href')
      .and('includes', '/study')
  })

  it.skip("Those links actually filter the cards", () => {
    cy.get('div[class="cursor-pointer"]').parent().children().eq(2).children('a')
      .eq(0).click().wait(10)
      .get('article').should('have.length', 2)
    cy.get('article').eq(0).contains('Is your name Alex?')
    cy.get('article').eq(1).contains('Is Florida stupid?')
    cy.get('dd').contains('Is Yoda a dog?').should('not.exist')

    cy.get('div[class="cursor-pointer"]').parent().children().eq(2).children('a')
      .eq(1).click().wait(10)
      .get('article').should('have.length', 1)
    cy.get('article').eq(0).contains('Is Yoda a dog?')
    cy.get('dd').contains('Is your name Alex?').should('not.exist')
    cy.get('dd').contains('Is Florida stupid?').should('not.exist')

    cy.get('div[class="cursor-pointer"]').parent().children().eq(2).children('a')
      .eq(2).click().wait(10)
      .get('article').should('have.length', 3)
    cy.get('article').eq(0).contains('Is your name Alex?')
    cy.get('article').eq(1).contains('Is Florida stupid?')
    cy.get('article').eq(2).contains('Is Yoda a dog?')
  })

  it("There is a body with a sub-header", () => {
    cy.get('h2')
      .contains('Welcome to Leet Cards!')
  })

  it("In that body there is a link to the study page with all the cards", () => {
    cy.get('button').contains('Enter').parent().parent()
      .should('have.attr', 'href')
      .and('includes', '/study')
  })

  it("The footer has a link to my LinkedIn", () => {
    cy.get('footer').children('p').contains('Built by').children()
      .should('have.attr', 'href')
      .and('includes', 'https://www.linkedin.com/in/alexkio/')
  })

  it("The footer has a link to this GitHub repo", () => {
    cy.get('footer').children().eq(1).children()
      .should('have.attr', 'href')
      .and('includes', 'https://github.com/alexmkio/leet-cards')
  })

  it("The GitHub icon has an aria label", () => {
    cy.get('footer').children().eq(1).children()
      .should('have.attr', 'aria-label')
      .and('includes', 'Link to GitHub Repository')
  })

})