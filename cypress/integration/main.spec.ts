describe('test', () => {
  it('TopPageWithGraphs', () => {
    cy.visit('/')
    cy.wait(10000)
    cy.screenshot('screenShot', {
      capture: 'fullPage',
    })
  })
})
