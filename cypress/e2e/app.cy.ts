describe('Load home page', () => {
  it('should load home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('img').should('be.visible');
  });
});

export {};
