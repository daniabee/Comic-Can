describe('Add A Comic Form', () => {
  beforeEach(()=> {
    cy.visit('https://stretch-project-iota.vercel.app/')
    cy.get('.add-comic-link').click()
  })
  it('Should have a form to add a comic', () => {
    cy.get('.form').should('be.visible')
  })
  it('Should have a title input field ', () => {
    cy.get(':nth-child(1) > label').contains('Title')
    cy.get(':nth-child(1) > label > input').should('have.value', '')
  })
  it('Should have a year input field ', () => {
    cy.get(':nth-child(2) > label').contains('Year')
    cy.get(':nth-child(2) > label > input').should('have.value', '')
  })
})