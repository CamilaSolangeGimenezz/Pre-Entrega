/// <reference types="cypress" />
import { LoginPage } from "../support/Pages/loginPage";
import { RegisterPage } from "../support/Pages/registerPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage.js";
import { ShoppingCartPage } from "../support/Pages/shoppingcartPage";

describe('Desafio3', () => {
    let data;
    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingcartPage = new ShoppingCartPage();


    before('Before', () => {
        cy.fixture('fixture').then(datos => {
            data = datos;
        });
    });

    beforeEach('', () => {
        cy.visit('/');
        registerPage.clickIniciaSesion();
        loginPage.escribirUsuario(data.usuario.usuario);
        loginPage.escribirContraseña(data.usuario.password);
        loginPage.clickLogIn();
        homePage.clickonlineShop();
    });

    it('Seleccionar 2 productos y añadirlos al carrito', () => {
        productsPage.agregarProductosAlCarrito(data.products.producto1);
        productsPage.agregarProductosAlCarrito(data.products.producto2);
        productsPage.goToShoppingCart();
        shoppingcartPage.verificarproductos();
        shoppingcartPage.verificarprecios();
        shoppingcartPage.clickShowTotalPrice();
        shoppingcartPage.verificarpreciofinal();

    })
});
