beforeEach(function () {
    cy.login("admin@gmail.com", "admin123");
    cy.visit("admin/sender"); // Kunjungi halaman data dosen
});
describe("Halaman Data Dosen", () => {
    it("Halaman data dosen dapat diakses dan menampilkan data tabel", () => {
        cy.get("#crudTable_info").should("exist");
    });


    it("Membuka modal tambah data dan tampilkan peringatan ketika input kosong", () => {
        cy.get(
            "#layoutSidenav_content > main > div > div > div > div > div.card-header > a"
        ).click();
        cy.get(
            "#createModal > div > div > form > div.modal-footer > button.btn.btn-primary"
        ).click();
        cy.get("#createModal").should("be.visible");
    });

    it("Tampilkan pesan gagal ketika input tidak valid (cth. input nama mengandung simbol)", () => {
        cy.get(
            "#layoutSidenav_content > main > div > div > div > div > div.card-header > a"
        ).click();
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(1) > div > input").type("2318nama@#$");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(2) > div > input").type("nidn23187%^&");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").type("pendidikan23187%^&");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(4) > div > input").type("jabatan23187%^&");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(5) > div > input").invoke('attr', 'type', 'text');
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(5) > div > input").type("email23187%^&");
        cy.get("#createModal > div > div > form > div.modal-footer > button.btn.btn-primary").click();
        cy.get("#createModal").should("be.visible");
    });

    it("Tampilkan pesan success ketika input valid", () => {
        cy.get(
            "#layoutSidenav_content > main > div > div > div > div > div.card-header > a"
        ).click();
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(1) > div > input").type("Andi");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(2) > div > input").type("9923368767812");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").type("S2 Magister Matematika");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(4) > div > input").type("Dosen");
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(5) > div > input").invoke('attr', 'type', 'text');
        cy.get("#createModal > div > div > form > div.modal-body > div:nth-child(5) > div > input").type("andimuhammad@gmail.com");
        cy.get("#createModal > div > div > form > div.modal-footer > button.btn.btn-primary").click();
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show").should("be.visible");
    });

    it("Membuka modal edit data dan tampilkan peringatan ketika input kosong", () => {
        var dataId = "10"; // ubah target modal
        cy.get("a[data-bs-target='#updateModal" + dataId + "']").click();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(1) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(2) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(4) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-footer > button.btn.btn-primary").click();
        cy.get("#updateModal" + dataId).should('be.visible');
    })

    it("Tampilkan pesan gagal ketika input tidak valid (cth. input nama mengandung simbol)", () => {
        var dataId = "10"; // ubah target modal
        cy.get("a[data-bs-target='#updateModal" + dataId + "']").click();

        //Hapus field yang telah terisi
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(1) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(2) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(4) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").clear();

        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(1) > div > input").type('2318nama@#$[edited]');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(2) > div > input").type('nidn23187%^&[edited]');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").type('pendidikan23187%^&[edited]');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(4) > div > input").type('jabatan23187%^&[edited]');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").invoke('attr', 'type', 'text');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").type('email23187%^&[edited]');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-footer > button.btn.btn-primary").click();
        cy.get("#updateModal" + dataId).should('be.visible');
    })

    it("Tampilkan pesan success ketika input valid", () => {
        var dataId = "10"; // ubah target modal
        cy.get("a[data-bs-target='#updateModal" + dataId + "']").click();

        //Hapus field yang telah terisi
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(1) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(2) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(4) > div > input").clear();
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").clear();

        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(1) > div > input").type('Rian');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(2) > div > input").type('826386123312');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(3) > div > textarea").type('S2 Magister Bahasa Inggris');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(4) > div > input").type('Dosen');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").invoke('attr', 'type', 'text');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-body > div:nth-child(5) > div > input").type('rian123@gmail.com');
        cy.get("#updateModal" + dataId + " > div > div > form > div.modal-footer > button.btn.btn-primary").click();
        cy.get("#layoutSidenav_content > main > div > div > div > div > div.card-body > div.alert.alert-success.alert-dismissible.fade.show").should("be.visible");
    })

    it("Tampilkan peringatan hapus terlebih dahulu ketika user akan menghapus data", () => {
        cy.get("#crudTable > tbody > tr:nth-child(1) > td:nth-child(7) > form > button").click({force: true});
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Anda akan menghapus item ini dari situs anda?');
            return true; // Simulate clicking 'OK'
        });
    })

    it("Memastikan fitur pencarian dapat mencari data dosen berdasarkan nama/NIDN",()=>{
        cy.get("#crudTable_filter > label > input").type("Rian");

    })
});
