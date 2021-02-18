describe('Home Page Mobile', () => {
    it('Mobile menu items are visible', () => {
        cy.viewport('iphone-8');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('div.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Personal').should('be.visible');
        cy.get('nav.mobile-menu > div > div > a').contains('Businesses').should('be.visible');
        cy.get('nav.mobile-menu > div > div > a').contains('Healthcare providers').should('be.visible');
        cy.get('nav.mobile-menu > div > div > a').contains('Intermediaries').should('be.visible');
        cy.get('nav.mobile-menu > div > a').contains('News').should('be.visible');
        cy.get('nav.mobile-menu > div > a').contains('About us').should('be.visible');
        cy.get('nav.mobile-menu > div > a').contains('Contact us').should('be.visible');
        cy.get('nav.mobile-menu > div > div > a').contains('Sign in').should('be.visible');
    })
    it('Desktop menu items lead to the right page', () => {
        cy.viewport('iphone-8');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Personal').click();
        cy.url().should('contain', "/personal");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Businesses').click();
        cy.url().should('contain', "/businesses");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Healthcare providers').click()
        cy.url().should('contain', "/healthcare-providers");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Intermediaries').click();
        cy.url().should('contain', "/intermediaries");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > a').contains('News').click();
        cy.url().should('contain', "/news");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > a').contains('About us').click();
        cy.url().should('contain', "/about");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > a').contains('Contact us').click();
        cy.url().should('contain', "/contact");
        cy.get('.mobile').click();
        cy.get('nav.mobile-menu > div > div > a').contains('Sign in').click();
        cy.url().should('contain', "logon.aspx");
    })
})