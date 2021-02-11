/// <reference types="cypress" />

describe('Link acasa', function(){
    it('Open', function(){
        cy.visit('https://tantraesoteric.ro/');
        //cy.get('a').contains('Acasa').should('be.visible');
    })
})