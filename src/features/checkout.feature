Feature: Proceso de compra en SauceDemo

  Scenario: El usuario puede completar el proceso de compra hasta la confirmación
    Given que el usuario ha iniciado sesión y ha agregado "sauce-labs-backpack" al carrito
    When ingresa al carrito de compras
    And completa el proceso de compra con los datos "Juan", "Perez" y código postal "12345"
    Then debería ver el mensaje de confirmación "Thank you for your order!"