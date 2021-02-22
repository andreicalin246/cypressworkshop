/// <reference types="cypress" />

describe('Home page', function(){
    it('Descktop menu items are visible', function(){
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('a').contains('Personal').should('be.visible');    
    })
    it('Mobile menu items are visible', function(){
        cy.viewport('iphone-8');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('div.mobile').click();
        cy.get('nav.mobile-menu > div > div a').contains('Personal').should('be.visible');

    })
})