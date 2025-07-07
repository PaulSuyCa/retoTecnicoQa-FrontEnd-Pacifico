@SauceDemo
@Carrito
Feature: Manejo del carrito de compras

  Background: Login a la web
    Given que el usuario ha iniciado sesión correctamente

  Scenario: El usuario puede agregar un producto al carrito desde la página de productos
    When agrega el producto "sauce-labs-backpack" al carrito
    Then el contador del carrito debería mostrar "1"

  Scenario: El usuario puede ver los productos agregados en el carrito de compras
    And agrega el producto "sauce-labs-backpack" al carrito
    When ingresa al carrito de compras
    Then debería ver el producto "Sauce Labs Backpack" en el carrito