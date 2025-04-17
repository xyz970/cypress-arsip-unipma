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

    var name = Math.random().toString(36).substring(2,7);
    cy.get('input[name="name"]').type(name.toUpperCase());
    cy.get('input[name="email"]').type(name+"@gmail.com");
    cy.get('input[name="password"]').type("123456");
    
    cy.get('button[class="btn btn-primary"]').should('contain.text','Tambah Pengguna Baru').click(); //Klik tombol simpan
  });

  it('Pengguna Logout',()=>{
    cy.login("admin@gmail.com","admin123");
    cy.visit('admin/dashboard');
    cy.get('a[data-bs-toggle="dropdown"]').click();
    cy.get('button[type="submit"]').should('contain.text','Logout').click();
  });
  

})
