Feature: Funcionalidad de SauceDemo

  Scenario: El usuario puede iniciar sesión con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de productos

  Scenario: El usuario no puede iniciar sesión con credenciales inválidas
    Given que el usuario está en la página de login
    When ingresa el usuario "invalid_user" y la contraseña "wrong_password"
    Then debería ver un mensaje de error de login

  Scenario: El usuario puede agregar un producto al carrito desde la página de productos
    Given que el usuario ha iniciado sesión correctamente
    When agrega el producto "sauce-labs-backpack" al carrito
    Then el contador del carrito debería mostrar "1"

  Scenario: El usuario puede ver los productos agregados en el carrito de compras
    Given que el usuario ha iniciado sesión y ha agregado "sauce-labs-backpack" al carrito
    When ingresa al carrito de compras
    Then debería ver el producto "Sauce Labs Backpack" en el carrito

  Scenario: El usuario puede completar el proceso de compra hasta la confirmación
    Given que el usuario ha iniciado sesión y ha agregado "sauce-labs-backpack" al carrito
    When ingresa al carrito de compras
    And completa el proceso de compra con los datos "Juan", "Perez" y código postal "12345"
    Then debería ver el mensaje de confirmación "Thank you for your order!"