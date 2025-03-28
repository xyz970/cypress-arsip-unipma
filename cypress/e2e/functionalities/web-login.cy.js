/// <reference types="cypress" />
describe('Akses Web', () => {
  it('User melakukan login', () => {
    cy.login("admin@gmail.com","admin123");
    
  })
})