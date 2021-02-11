/// <reference types="cypress" />

describe('Link acasa', function(){
    it('Desktop menu items are visible', function(){
        cy.viewport('macbook-16')
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('Personal').should('be.visible');

        
    })
    it('Mobile menu items are visible', function(){
        cy.viewport("iphone-6+")
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('div.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains("Personal").should("be.visible");

        
    })
})