/// <reference types="cypress" />
beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('https://www.wpa.org.uk/');
    cy.get('#ccc-notify-accept').click()
})
describe('Homepage', function(){
    
    it('Mobile menu items are visible', function(){
    cy.get('div.mobile').click();
    cy.get('nav.mobile-menu > div > div > a').contains('Personal').should('be.visible');
    cy.get('.block').find('> a').eq(0).contains('WPA Home').should('be.visible');
    cy.get('.block').find('> a').eq(0).contains('WPA Home').should('be.visible');
    cy.get('.block a[href="/businesses"]').contains('Businesses').should('be.visible');
    cy.get('.block a[href="/healthcare-providers"]').contains('Healthcare providers').should('be.visible');
    cy.get('.block a[href="/intermediaries"]').contains('Intermediaries').should('be.visible');
    cy.get('div.block').find('>a').eq(5).contains('Sign in').should('be.visible');
    cy.get('.list').find('>a').eq(0).contains('News').should('be.visible');
    cy.get('.list').find('>a').eq(1).contains('About us').should('be.visible');
    cy.get('.list').find('>a').eq(2).contains('Contact us').should('be.visible');
    cy.get('.logo').should('be.visible')
    cy.get('.sign-in').should('be.visible').click()
    cy.get('a.link').contains('Username?').should('be.visible');
    cy.get('a.link').contains('Password?').should('be.visible');
    })
})