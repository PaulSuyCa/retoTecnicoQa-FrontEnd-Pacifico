Feature: Inicio de sesión en SauceDemo Error

  Scenario: El usuario puede iniciar sesión con credenciales erroneas
    Given que el usuario está en la página de login
    When ingresa el usuario "invalid_user" y la contraseña "wrong_password"
    Then debería ver la página de productos
