/// <reference types="cypress" />
describe('Fitur Login', () => {
  it('User melakukan login', () => {
    cy.login("admin@gmail.com","admin123");  
  });
})

describe('Akses halaman admin', () => {
  it('Akses halaman struktur',()=>{
    cy.login("admin@gmail.com","admin123");
    cy.visit('admin/department');
    cy.scrollTo('bottom')
  });

  // it('Akses halaman dosen',()=>{
  //   cy.login("admin@gmail.com","admin123");
  //   cy.visit('admin/sender'); // Akses halaman admin/sender

  //   cy.get('[data-bs-toggle="modal"]').click(); // Klik tombol buka modal

  //   cy.get('input[name="name"]').type("Test Nama Dosen");
  //   cy.get('input[name="nidn"]').type("Test NIDN Dosen");
  //   cy.get('textarea[name="pendidikan"]').type("Test Pendidikan Dosen");
  //   cy.get('input[name="jabatan"]').type("Test Jabatan Dosen");
  //   cy.get('input[name="email"]').type("test12@gmail.com");

  //   cy.get('button[class="btn btn-primary"]').should('contain.text','Simpan').click(); //Klik tombol simpan

  // });

  it('Akses halaman tambah dokumen',()=>{
    cy.login("admin@gmail.com","admin123");
    cy.visit('admin/letter/create'); // Kunjungi tambah dokumen

    cy.get('select[name="letter_type"]').select('Kriteria 1');
    cy.get('input[name="letter_no"]').type('Nama Surat');
    cy.get('input[name="letter_date"]').type('2025-07-01');
    cy.get('input[name="date_received"]').type('2025-07-05');
    cy.get('input[name="regarding"]').type('Perihal Test');
    cy.get('input[name="letter_file"]').selectFile('cypress/files/file.pdf');

    cy.get('button[class="btn btn-primary"]').should('contain.text','Simpan').click(); //Klik tombol simpan
  });

  require('./kriteria')

  it('Akses halaman data pengguna',()=>{
    cy.login("admin@gmail.com","admin123");
    cy.visit('admin/user');
    cy.get('a[class="btn btn-sm btn-primary"]').click();
  });
  

})
