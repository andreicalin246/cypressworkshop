/// <reference types="cypress" />
context('Login', () => {


beforeEach(() => {
cy.viewport('macbook-15');
cy.visit('https://www.wpa.org.uk/');
cy.get('#ccc-notify-accept').click();
    })  
describe('Homepage', function(){
    it('Buttons on right', function(){
cy.get('.pull-right').find('> a').eq(0).contains('News').should('be.visible')
cy.get('.pull-right').find('> a').eq(1).contains('About us').should('be.visible')
cy.get('.pull-right').find('> a').eq(2).contains('Contact us').should('be.visible')
cy.get('.pull-right').find('> a').eq(3).contains('Sign in').should('be.visible')
    })
    it('Buttons on left', function(){
cy.get('.pull-left').find('> a').eq(0).contains('Personal').should('be.visible')
cy.get('.pull-left').find('> a').eq(1).contains('Business').should('be.visible')
cy.get('.pull-left').find('> a').eq(2).contains('Healthcare providers').should('be.visible')
cy.get('.pull-left').find('> a').eq(3).contains('Intermediaries').should('be.visible')
    })
    it('Company logo ', function(){
cy.get('.logo').should('be.visible')
        
})
it('Cards should be visible', function(){
cy.get('.paddings').find('> h2').eq(1).contains('Why choose WPA?').should('be.visible')
cy.get('.paddings').find('> div').eq(1).contains('Tailored healthcare').should('be.visible')
cy.get('.paddings').find('> div').eq(1).contains('Freedom to choose').should('be.visible')
cy.get('.paddings').find('> div').eq(1).contains('Expert service').should('be.visible')
cy.get('.paddings').find('> div').eq(2).contains('Review our claim service').should('be.visible')
    })
it('Footer should be visible ', function(){
    cy.get('.links a[href="/privacy-legal"]').contains('Privacy & legal').should('be.visible')
    cy.get('.links a[href="/supporting-good-causes"]').contains('Good causes').should('be.visible')
    cy.get('.links a[href="/about/complaints"]').contains('Complaints').should('be.visible')
    cy.get('.links a[href="/about/careers"]').contains('Careers').should('be.visible')
    cy.get('.links').find('> li').eq(1).contains('Cookie settings').should('be.visible')
})
})
})
