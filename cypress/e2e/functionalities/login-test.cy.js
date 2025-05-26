describe("Autentikasi ", () => {
  it("Login dengan email dan password kosong", () => {
    cy.visit("/");
    cy.get("button.btn.btn-primary").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}`);
  });

  it("Login dengan field email kosong", () => {
    cy.visit("/");
    cy.get("#password").type("admin123");
    cy.get("body").type("{Enter}");
    cy.get("button.btn.btn-primary").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}`);
  });

  it("Login dengan field password kosong", () => {
    cy.visit("/");
    cy.get("#email").type("admin@gmail.com");
    cy.get("body").type("{Enter}");
    cy.get("button.btn.btn-primary").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}`);
  });

  it("Login dengan email dan password valid", () => {
    cy.visit("/");
    cy.get("#email").click();
    cy.get("#email").type("admin@gmail.com");
    cy.get("body").type("{Enter}");
    cy.get("#password").type("admin123");
    cy.get("body").type("{Enter}");
    cy.get("button.btn.btn-primary").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}admin/dashboard`);
  });
});
