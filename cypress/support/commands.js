const host = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? "https://leet-cards.herokuapp.com/"
  : "http://localhost:6565/"

Cypress.Commands.add('loadHome', () => {
  cy.intercept("GET", `${host}cards`, {
    statusCode: 200,
    fixture: "cards.json",
  })
    .visit("http://localhost:3000")
})

Cypress.Commands.add('loadAddPage', () => {
  cy.intercept("GET", `${host}cards`, {
    statusCode: 200,
    fixture: "cards.json",
  })
    .intercept("POST", `${host}cards`, {
      statusCode: 200,
      fixture: "addedCard.json",
    })
    .visit("http://localhost:3000/add")
})

Cypress.Commands.add('loadEditPage', () => {
  cy.intercept("GET", `${host}cards`, {
    statusCode: 200,
    fixture: "cards.json",
  })
    .intercept("GET", `${host}cards/1`, {
      statusCode: 200,
      fixture: "cardNumber1.json",
    })
    .intercept("GET", `${host}cards/2`, {
      statusCode: 200,
      fixture: "cardNumber2.json",
    })
    .intercept("GET", `${host}cards/3`, {
      statusCode: 200,
      fixture: "cardNumber3.json",
    })
    .visit("http://localhost:3000/edit/1")
})