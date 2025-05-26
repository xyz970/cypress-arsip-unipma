beforeEach(function(){
    cy.login("admin@gmail.com","admin123");
    cy.visit("admin/letter/kriteria-1"); // Kunjungi halaman kriteria 1
})
describe("Akses halaman kriteria 1",()=>{
    it("Halaman Kriteria memuat data dan bisa menggunakan fitur pencarian",()=>{
        cy.get('#crudTable_filter > label > input').type('Nama Surat')
    })

    it("Fitur Cetak berfungsi dengan baik",()=>{
        cy.get('#layoutSidenav_content > main > div > div > div > div > div.card-header > a')
        .should('have.attr','href')
        .and('equal',`${Cypress.config('baseUrl')}admin/print/kriteria-1`)
    })

    it("Fitur Detail berfungsi dengan baik",()=>{
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(5) > a.btn.btn-success.btn-xs").click();
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div > table > tbody > tr:nth-child(1) > td").should('be.visible');
    })
    

    it("Mengubah data dengan inputan kosong",()=>{
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(5) > a.btn.btn-primary.btn-xs").click();
        cy.get('select[name="letter_type"]').select([])
        cy.get('input[name="letter_no"]').clear();
        cy.get('input[name="letter_date"]').clear();
        cy.get('input[name="date_received"]').clear();
        cy.get('input[name="regarding"]').clear();

        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click();
    })

    it("Mengubah data dengan inputan salah(cth. File dokumen berekstensi jpg)",()=>{
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(5) > a.btn.btn-primary.btn-xs").click();

        cy.get('input[name="letter_no"]').clear();
        cy.get('input[name="letter_date"]').clear();
        cy.get('input[name="date_received"]').clear();
        cy.get('input[name="regarding"]').clear();

        cy.get('select[name="letter_type"]').select('Kriteria 1');
        cy.get('input[name="letter_no"]').type('Surat 213#!@*&');
        cy.get('input[name="letter_date"]').type('2025-07-01');
        cy.get('input[name="date_received"]').type('2025-07-05');
        cy.get('input[name="regarding"]').type('Perihal 4*!)@&$%!@');
        cy.get('input[name="letter_file"]').selectFile('cypress/files/image.jpg');
        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click();
        cy.get("#layoutSidenav_content > main > div > div").should('be.visible');
    })

    it("Mengubah data dengan inputan valid",()=>{
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(5) > a.btn.btn-primary.btn-xs").click();

        cy.get('input[name="letter_no"]').clear();
        cy.get('input[name="letter_date"]').clear();
        cy.get('input[name="date_received"]').clear();
        cy.get('input[name="regarding"]').clear();

        cy.get('select[name="letter_type"]').select('Kriteria 1');
        cy.get('input[name="letter_no"]').type('Nama Surat [edited]');
        cy.get('input[name="letter_date"]').type('2025-07-01');
        cy.get('input[name="date_received"]').type('2025-07-05');
        cy.get('input[name="regarding"]').type('Perihal Test [edited]');
        cy.get('input[name="letter_file"]').selectFile('cypress/files/file.pdf');

        cy.get('#layoutSidenav_content > main > div > form > div > div > div > div.card-body > div:nth-child(7) > div > button').click(); //Klik tombol simpan
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show").should("be.visible");
    })

    it("Tombol Hapus berfungsi dengan baik",()=>{
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(5) > form > button").click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Anda akan menghapus item ini dari situs anda?');
            return true; // Simulate clicking 'OK'
        });
    })

    it("Fungsi 'Next' tabel pada halaman kriteria dapat berfungsi dengan baik",()=>{
        cy.scrollTo('bottom');
        cy.get("#crudTable_next > a").click();
    })

})