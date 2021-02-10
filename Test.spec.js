

/// <reference types="cypress" />

describe('Acasa should be visible', function(){
    it('Open', function(){
        cy.visit('https://tantraesoteric.ro/');
         //cy.get('a').contains('Acasa').should('be.visible');
       cy.get('.header_zone > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').should('be.visible');
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
   
   
    })





})