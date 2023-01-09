describe('Comic Can Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://comic-can.herokuapp.com/api/v1/comicData', {fixture: 'getComicData'})
    cy.visit('http://localhost:3000/')
  })
  it('should have banner image', () => {
    cy.get('.banner').should('have.attr', 'alt', "Comic Can")
  })
  it('should have a nav bar', () => {
    cy.get('.navbar').should('exist')
  })
  it('should have a my collection button', () => {
    cy.get('.my-collection-link').click()
    cy.url().should('eq', 'http://localhost:3000/comicCollection')
  })
  it('should have an add a comic link', () => {
    cy.get('.add-comic-link').click()
    cy.url().should('eq', 'http://localhost:3000/addComic')
  })
})