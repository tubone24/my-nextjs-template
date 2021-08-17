describe('main', () => {
  it('initial first page', () => {
    cy.visit('/')
    cy.title().should(
      'eq',
      'This is Next.js + TypeScript + Chakra + Jest + StoryBook + Recoil Template'
    )
    cy.findByTestId('hero-description-text').should(
      'have.text',
      'This template implements Next.js with TypeScript, uses ChakraUI for CSS, uses Jest for testing, StoryBook for cataloging components, and Recoil for state management by tubone24.'
    )
    cy.findByTestId('input-name').should('have.value', 'tubone24')
  })
  it('change user name', () => {
    cy.fixture('username').then((usernameJson) => {
      cy.visit('/')
      cy.findByTestId('input-name').should('have.value', 'tubone24')
      cy.findByTestId('input-name').clear()
      cy.findByTestId('input-name').should('have.value', '')
      cy.findByTestId('input-name').type(usernameJson.name)
      cy.findByTestId('input-name').should('have.value', usernameJson.name)
      cy.findByTestId('hero-description-text').should(
        'have.text',
        `This template implements Next.js with TypeScript, uses ChakraUI for CSS, uses Jest for testing, StoryBook for cataloging components, and Recoil for state management by ${usernameJson.name}.`
      )
    })
  })
})
