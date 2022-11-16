describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from main page to pokemon page', function () {
    cy.visit('http://localhost:5000')
    cy.get('.list-item-name').contains('rattata').click()
    cy.location('pathname', { timeout: 10000 }).should('include', '/pokemon/rattata')
    cy.contains('hustle')
    cy.contains('run away')
  })
})