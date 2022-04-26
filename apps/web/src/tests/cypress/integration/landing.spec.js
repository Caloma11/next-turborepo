describe('Landing', () => {

    it('checks for welcome message', () => {
        cy.visit('http://localhost:3002/web')
        cy.contains('WELCOME TO WEB-APP');
    })
})