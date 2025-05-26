beforeEach(function () {
    cy.login("admin@gmail.com", "admin123");
    cy.visit("admin/dashboard"); // Kunjungi halaman data pengguna
    cy.get("#navbarDropdownUserImage > img").click();
    cy.get("#sidenavAccordion > ul > li > div > a").click();
    cy.get('#layoutSidenav_content > main > div > nav > a:nth-child(2)').click();
})

describe("Halaman Reset Password",()=>{
    it("Halaman menampilkan ubah password profil yang sedang login",()=>{});
    it("Tampilkan pesan peringatan ketika input kosong",()=>{
        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div > div > div.card-body > form > button').click();
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/setting/password`);
    })
    it("Tampilkan pesan error ketika input tidak valid (cth. password lama tidak sama)",()=>{
        var current_password = "12345";
        var new_password = "admin123"
        cy.get("input[name='current_password']").type(current_password);
        cy.get("input[name='new_password']").type(new_password);
        cy.get("input[name='new_confirm_password']").type(new_password);
        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div > div > div.card-body > form > button').click();
        cy.get("#layoutSidenav_content > main > div > div:nth-child(3) > div > div").should('be.visible');
    })

    it("User bisa melakukan ubah password(dengan mengisi data password lama,password baru dan konfirmasi password dengan valid) ",()=>{
        var current_password = "admin123";
        var new_password = "admin123"
        cy.get("input[name='current_password']").type(current_password);
        cy.get("input[name='new_password']").type(new_password);
        cy.get("input[name='new_confirm_password']").type(new_password);
        cy.get('#layoutSidenav_content > main > div > div:nth-child(4) > div > div > div.card-body > form > button').click();
        cy.get("#layoutSidenav_content > main > div > div:nth-child(4) > div > div > div.card-body > div").should('be.visible');
    })
})