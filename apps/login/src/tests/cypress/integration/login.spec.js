describe('Login Page', () => {

    it('checks for login message', () => {
        cy.visit('http://localhost:3001/login')
        cy.contains('LOGIN');
    })
})