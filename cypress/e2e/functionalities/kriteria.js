it('Akses halaman kriteria',()=>{
    cy.login("admin@gmail.com","admin123");
    cy.visit('admin/letter/kriteria-1');
    cy.visit('admin/letter/kriteria-2');
    cy.visit('admin/letter/kriteria-3');
    cy.visit('admin/letter/kriteria-4');
    cy.visit('admin/letter/kriteria-5');
    cy.visit('admin/letter/kriteria-6');
    cy.visit('admin/letter/kriteria-7');
    cy.visit('admin/letter/kriteria-8');
    cy.visit('admin/letter/kriteria-9');
  });