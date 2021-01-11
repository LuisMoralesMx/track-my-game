/// <reference types="cypress" />

context("View Games", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/view-games-component");
  });

  it("validates menu exist", () => {
    cy.get("[data-cy=menu]")
      .should("exist")
      .click()
      .then(() => {
        cy.get("[data-cy=menu-home]").should("exist");
        cy.get("[data-cy=menu-game-list]").should("exist");
      });
  });

  it("opens add button dialog", () => {
    cy.get("[data-cy=add-button]")
      .should("exist")
      .click({ force: true })
      .then(() => {
        cy.get("[data-cy=add-game-container]").should("exist");
      });
  });

  it("open dialog and save button exist", () => {
    cy.get("[data-cy=add-button]")
      .should("exist")
      .click({ force: true })
      .then(() => {
        cy.get("[data-cy=add-game-button]").should("exist");
      });
  });

  it("open dialog and save reset exist", () => {
    cy.get("[data-cy=add-button]")
      .should("exist")
      .click({ force: true })
      .then(() => {
        cy.get("[data-cy=reset-game-button]").should("exist");
      });
  });

  it("opens add button, fills form and submit", () => {
    cy.get("[data-cy=add-button]")
      .should("exist")
      .click({ force: true })
      .then(() => {
        cy.get("[data-cy=name]").type("Resident Evil 3: Remake").should("have.value", "Resident Evil 3: Remake");
        cy.get("[data-cy=platform]").type("PS4").should("have.value", "PS4");
        cy.get("[data-cy=genre]").type("Survival Hurror").should("have.value", "Survival Hurror");
        cy.get("[data-cy=progress]").type("0").should("have.value", "0");
      })
      .then(() => {
        cy.get("[data-cy=add-game-button]").click();
      });
  });
});
