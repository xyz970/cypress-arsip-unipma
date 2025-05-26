beforeEach(function () {
    cy.login("admin@gmail.com", "admin123");
    cy.visit("admin/dashboard"); 
    cy.get("#navbarDropdownUserImage > img").click();
});

describe("Logout",()=>{
    it("Pengguna keluar dari aplikasi dengan mengklik logout dan akan diarahkan ke halaman login",()=>{
        cy.get("#sidenavAccordion > ul > li > div > form > button").click();
        cy.url().should('be.equal',`${Cypress.config("baseUrl")}`)
    })
})