export class ProductsPage {
  constructor() {
    this.redCapproduct1 = 'Red Cap';
    this.pinkSweaterproduct2 = 'Pink Sweater';
    this.closemodal = '#closeModal';
  };
  agregarProductosAlCarrito() {
    cy.get('#redcup').click();
    cy.get('#closeModal').click();
    cy.get('#pinksweater').click();
    cy.get('#closeModal').click();
  };
  goToShoppingCart() {
    cy.get('#goShoppingCart').click();
  }
};
