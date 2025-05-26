beforeEach(function(){
    cy.login("admin@gmail.com","admin123");
    cy.visit("admin/letter/create"); // Kunjungi halaman prodi
});
describe("Tambah Dokumen",()=>{
    it("Halaman Tambah Dokumen dapat diakses dengan baik",()=>{});

    it("Gagal menambahkan dokumen ketika input kosong",()=>{
        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click(); //Klik tombol simpan
    });

    it("Gagal menambahkan dokumen ketika input tidak valid(cth. input bisa menerima simbol)",()=>{
        cy.get('select[name="letter_type"]').select('Kriteria 1');
        cy.get('input[name="letter_no"]').type('Surat 213#!@*&');
        cy.get('input[name="letter_date"]').type('2025-07-01');
        cy.get('input[name="date_received"]').type('2025-07-05');
        cy.get('input[name="regarding"]').type('Perihal 4*!)@&$%!@');
        cy.get('input[name="letter_file"]').selectFile('cypress/files/image.jpg');
    
        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click(); //Klik tombol simpan
        cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/letter/create`);
    });

    it("Gagal menambahkan dokumen ketika input tidak valid(cth. input pdf tidak bisa mengirim file jpg)",()=>{
        cy.get('select[name="letter_type"]').select('Kriteria 1');
        cy.get('input[name="letter_no"]').type('Nama Surat');
        cy.get('input[name="letter_date"]').type('2025-07-01');
        cy.get('input[name="date_received"]').type('2025-07-05');
        cy.get('input[name="regarding"]').type('Perihal Test');
        cy.get('input[name="letter_file"]').selectFile('cypress/files/file.pdf');

        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click(); //Klik tombol simpan
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show").should("be.visible");
    })
});