beforeEach(function () {
    cy.login("admin@gmail.com", "admin123");
    cy.visit("admin/user"); // Kunjungi halaman data pengguna
})

function getRandomString(length) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return result;
}


describe("Halaman Data Pengguna", () => {
    it("Halaman Data Pengguna dapat diakses dengan baik dan menampilkan table yang bisa di sortir", () => {
        cy.get("#crudTable > thead > tr > th:nth-child(2)").click();
    })

    it("Pencarian pengguna berdasarkan nama/email", () => {
        cy.get("#crudTable_filter > label > input").type("Test");
    })

    it("Fitur tambah pengguna bisa diakses dan tampilkan pesan peringatan ketika input kosong", () => {
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-header > a").click();
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > form > button").click();
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/user/create`);
    })

    it("Tampilkan pesan gagal ketika input tidak valid saat tambah data", () => {
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-header > a").click();

        var name = Math.random().toString(36).substring(2, 7);
        cy.get('input[name="name"]').type(name.toUpperCase());
        cy.get('input[name="email"]').type(name + "@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > form > button").click();
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/user/create`);
    })

    it("Arahkan user ke data pengguna dan menampilkan pesan success ketika input valid", () => {
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-header > a").click();
        var name = Math.random().toString(36).substring(2, 7);
        cy.get('input[name="name"]').type(getRandomString(5).toUpperCase());
        cy.get('input[name="email"]').type(getRandomString(5) + "@gmail.com");
        cy.get('input[name="password"]').type("123456");
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > form > button").click();
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show").should("be.visible");
    })

    it("Fungsi Next tabel daftar pengguna pada halaman Data Pengguna dapat berfungsi dengan baik",()=>{
        cy.scrollTo('bottom');
        cy.get("#crudTable_next > a").click();
    })
})