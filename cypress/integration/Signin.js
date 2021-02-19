/// <reference types="cypress" />
context('Login', () => {


    beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('https://www.wpa.org.uk/');
    cy.get('#ccc-notify-accept').click();
        })  
        describe('Sign in', function(){
            it('User login without an account', function(){
    cy.get('.pull-right').find('> a').eq(3).contains('Sign in').should('be.visible').click()
    cy.get('#ctl00_pageContent_ctrlStep1_tbUsername').type('Cristina').should('have.value' ,'Cristina')
    cy.get('#ctl00_pageContent_ctrlStep1_tbPassword').type('1234').should('have.value' ,'1234')
    cy.get('#ctl00_pageContent_ctrlStep1_btnSignIn').should('be.visible').click()
    cy.get('#mainContent').contains('There is a problem accessing your secure online account').should('be.visible')
            })
        })
    })
    