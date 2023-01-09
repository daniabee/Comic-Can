describe('Add A Comic Form', () => {
  const imagePath = 'https://assets-global.website-files.com/5e9fa1c7e4ed1f5e242e2313/6193e5a207deb036b43854b8_wmivW7QKEgECJssOARtI8Il41eqyCpIe2Xcf2c-UUIT0X7nbvG9sL-vVdKULUuMGG6wvV6pY39PZy6w7gCt4yrNy1q-gu-Gt7fA9wTjwz_0OgIKMazcO4bzL6ORoqXeID5XbJXps.png'
  const note = 'Iron Man first made his Marvel debut in Tales of Suspense #39 from the iconic duo of Stan Lee and Jack Kirby. It\'s a key issue from this period in Marvel Comics, and only increased in value as Iron Man became the central figure in the Marvel Cinematic Universe.'
  beforeEach(()=> {
    cy.intercept('POST', 'https://comic-can.herokuapp.com/api/v1/comicData', {fixture: 'postComicData'})
    cy.intercept('GET', 'https://comic-can.herokuapp.com/api/v1/comicData', {fixture: 'getComicData'})
    cy.visit('http://localhost:3000/')
    cy.get('.add-comic-link').click()
  })
  it('Should have a form to add a comic', () => {
    cy.get('.form').should('be.visible')
  })
  it('Should have a title input field ', () => {
    cy.get(':nth-child(1) > label').contains('Title')
    cy.get(':nth-child(1) > label > input').should('have.value', '')
  })
  it('Should have a year label and input field ', () => {
    cy.get(':nth-child(2) > label').contains('Year')
    cy.get(':nth-child(2) > label > input').should('have.value', '')
  })
  it('Should have a issue label and input field ', () => {
    cy.get(':nth-child(3) > label').contains('Issue')
    cy.get(':nth-child(3) > label > input').should('have.value', '')
  })
  it('Should have a grade label and input field ', () => {
    cy.get(':nth-child(4) > label').contains('Grade')
    cy.get(':nth-child(4) > label > input').should('have.value', '')
  })
  it('Should have an imageURL label and input field ', () => {
    cy.get(':nth-child(5) > label').contains('Image URL')
    cy.get(':nth-child(5) > label > input').should('have.value', '')
  })
  it('Should have a notes label and input field ', () => {
    cy.get(':nth-child(6) > label').contains('Notes')
    cy.get(':nth-child(6) > label > input').should('have.value', '')
  })
  it('Should clear the input form and a comic to the collection when inputs are filled out and the user selects the submit button', () => {
    cy.get(':nth-child(1) > label > input').type('Tales of Suspense').should('have.value', 'Tales of Suspense')
    cy.get(':nth-child(2) > label > input').type('1963').should('have.value', '1963')
    cy.get(':nth-child(3) > label > input').type('39').should('have.value', '39')
    cy.get(':nth-child(4) > label > input').type('9.6').should('have.value', '9.6')
    cy.get(':nth-child(5) > label > input').type(imagePath).should('have.value', imagePath)
    cy.get(':nth-child(6) > label > input').type(note).should('have.value', note)
    cy.get('button').click()
    cy.get(':nth-child(2) > label > input').should('have.value', '')
    cy.get(':nth-child(3) > label > input').should('have.value', '')
    cy.get(':nth-child(4) > label > input').should('have.value', '')
    cy.get(':nth-child(5) > label > input').should('have.value', '')
    cy.get(':nth-child(6) > label > input').should('have.value', '')
    cy.get('.my-collection-link').click()
    cy.url().should('eq', 'http://localhost:3000/comicCollection')
    cy.get('[data-key="4"] > a > .card-container > .comic-image').should('have.attr', 'src', imagePath )
  })
  // it('Should have a Home button that takes you back to the home page', () => {
  //   cy.get('.homeButton').click()
  //   cy.url().should('eq', 'https://stretch-project-iota.vercel.app/')
  // })
    // it('Should have a my collections button in the nav bar that takes you back to the my collections page', () => {
  //   cy.get('.my-collection-link').click()
  //   cy.url().should('eq', 'https://stretch-project-iota.vercel.app/comicCollection/')
  // })
})