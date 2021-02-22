/// <reference types="cypress" />

describe('Home page', function(){
    it('Go to Sign in page', function(){
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a.btn').contains('Sign in', {timeout:10000}).should('be.visible').click();
        cy.get('a').contains('Homepage').should('be.visible');    
    })
    it('Careers page', function(){
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('Careers').should('be.visible').click();
        cy.get('a').contains('Businesses').should('be.visible');    
    })
    it('News page', function(){
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('News').should('be.visible').click();
        cy.contains('Load more').should('be.visible');    
    })
    it('Mobile Complete fields in Sign in page', function(){
        cy.viewport('iphone-8');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a.sign-in').click();
        cy.get('input[type="text"]').type('raluca.dragomir@itperspectives.ro');
        cy.get('input[type="password"]').type('1234');

    })
    it('Complaints', function(){
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('Complaints').should('be.visible').click();
        cy.get('a.next.m-bottom').contains('Make a complaint to WPA',{timeout:10000}).should('be.visible').click();
        cy.get('select').eq(0).select('Miss');

          
    })
   

    
})