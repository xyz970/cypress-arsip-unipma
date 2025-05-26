before(function(){
    cy.login("admin@gmail.com","admin123");
    cy.visit("admin/department"); // Kunjungi halaman prodi
})
describe("Struktur Prodi ", () => {
    it("Halaman Struktur Prodi dapat diakses dan menampilkan gambar bagan prodi",()=>{
        cy.get("#layoutSidenav_content > main > div > div > div > div > center > img").should('exist');
    })
}); 