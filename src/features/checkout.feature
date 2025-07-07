@SauceDemo
@Checkout
Feature: Proceso de compra en SauceDemo

  Background: Login a la web
    Given que el usuario ha iniciado sesión correctamente
    And agrega el producto "sauce-labs-backpack" al carrito

  Scenario: El usuario puede completar el proceso de compra hasta la confirmación
    When ingresa al carrito de compras
    And completa el proceso de compra con los datos "Juan", "Perez" y código postal "12345"
    Then debería ver el mensaje de confirmación "Thank you for your order!"