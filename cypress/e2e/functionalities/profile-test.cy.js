beforeEach(function () {
    cy.login("admin@gmail.com", "admin123");
    cy.visit("admin/dashboard"); // Kunjungi halaman data pengguna
    cy.get("#navbarDropdownUserImage > img").click();
    cy.get("#sidenavAccordion > ul > li > div > a").click();
})

describe("Halaman Profile",()=>{
    it("Halaman menampilkan ubah data profil yang sedang login",()=>{
        cy.get("#layoutSidenav_content > main > div > div:nth-child(4) > div.col-xl-8 > div > div.card-body > form > div:nth-child(3) > input").should('contain.value','Admin')
    });

    it("Tampilkan pesan error ketika input tidak valid (cth. input email diisi tanpa karakter '@')",()=>{
        cy.get("input[name='name']").clear();
        cy.get("input[name='email']").clear();

        cy.get("input[name='name']").type("Admin [edited]");
        cy.get("input[name='email']").type("admin[edited]");
        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div.col-xl-8 > div > div.card-body > form > button').click();
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/setting`);  

    })
    it("Tampilkan pesan peringatan ketika input kosong",()=>{
        cy.get("input[name='name']").clear();
        cy.get("input[name='email']").clear();

        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div.col-xl-8 > div > div.card-body > form > button').click();
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/setting`);  
    })

    it("User bisa melakukan ubah profil(nama, email, dan foto profil) ketika input valid",()=>{
        cy.get("input[name='name']").clear();
        cy.get("input[name='email']").clear();

        cy.get("input[name='name']").type("Admin123");
        cy.get("input[name='email']").type("admin@gmail.com");
        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div.col-xl-8 > div > div.card-body > form > button').click();
        cy.get('#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show').should('be.visible');
    })
})