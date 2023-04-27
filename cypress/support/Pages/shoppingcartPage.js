export class ShoppingCartPage {
    constructor(){
        this.produconumero1 = "Red Cap"
        this.precionumero1 = 10
        this.productonumero2 = "Pink Sweater"
        this.precionumero2 = 18
    };

    verificarproductos(){
        cy.contains('Red Cap');
        cy.contains('Pink Sweater')
    };

    verificarprecios(){
        cy.contains(10);
        cy.contains(18);
    };

    verificarpreciofinal(){
        cy.contains(28);
    };
    
    clickShowTotalPrice(){
        cy.get('.css-n1d5pa > .chakra-button').click();
    };
};