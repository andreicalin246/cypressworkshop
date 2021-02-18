describe('Home Page', () => {
    it('Desktop menu items are visible', () => {
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('Personal').should('be.visible');
        cy.get('a').contains('Businesses').should('be.visible');
        cy.get('a').contains('Healthcare providers').should('be.visible');
        cy.get('a').contains('Intermediaries').should('be.visible');
        cy.get('a').contains('News').should('be.visible');
        cy.get('a').contains('About us').should('be.visible');
        cy.get('a').contains('Contact us').should('be.visible');
        cy.get('a').contains('Sign in').should('be.visible');
    })
    it('Desktop menu items lead to the right page', () => {
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('a').contains('Personal').click();
        cy.url().should('contain', "/personal");
        cy.get('a').contains('Businesses').click();
        cy.url().should('contain', "/businesses");
        cy.get('a').contains('Healthcare providers').click()
        cy.url().should('contain', "/healthcare-providers");
        cy.get('a').contains('Intermediaries').click();
        cy.url().should('contain', "/intermediaries");
        cy.get('a').contains('News').click();
        cy.url().should('contain', "/news");
        cy.get('a').contains('About us').click();
        cy.url().should('contain', "/about");
        cy.get('a').contains('Contact us').click();
        cy.url().should('contain', "/contact");
        cy.get('a').contains('Sign in').click();
        cy.url().should('contain', "logon.aspx");
    })
    it('Footer elements are visible', () => {
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('footer > div > div > p').should("contain", "©2021 WPA, Registered in England and Wales No 475557.");
        cy.get('footer > div > div > ul > li').then(($l) => {
            expect($l).to.have.length(5);
            expect($l.eq(0)).to.contain("Privacy & legal");
            expect($l.eq(1)).to.contain("Cookie settings");
            expect($l.eq(2)).to.contain("Good causes");
            expect($l.eq(3)).to.contain("Complaints");
            expect($l.eq(4)).to.contain("Careers");
        });
    })
    it('Footer elements lead to the right page', () => {
        cy.viewport('macbook-15');
        cy.visit('https://www.wpa.org.uk/');
        cy.get('#ccc-notify-accept').click();
        cy.get('footer > div > div > ul > li').contains("Privacy & legal").click();
        cy.url().should('contain', "/privacy-legal");
        cy.get('footer > div > div > ul > li').contains("Good causes").click();
        cy.url().should('contain', "/supporting-good-causes")
        cy.get('footer > div > div > ul > li').contains("Complaints").click();
        cy.url().should('contain', "about/complaints");
        cy.get('footer > div > div > ul > li').contains("Careers").click();
        cy.url().should('contain', "/about/careers");
        cy.get('footer > div > div > ul > li').contains("Cookie settings").click();
        cy.get('ccc-content').contains("This site uses cookies in order to work.").should('be.visible');
    })
})