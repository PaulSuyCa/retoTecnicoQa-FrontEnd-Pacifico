Feature: Inicio de sesión en SauceDemo

  Scenario: El usuario puede iniciar sesión con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de productos

  Scenario: El usuario no puede iniciar sesión con credenciales inválidas
    Given que el usuario está en la página de login
    When ingresa el usuario "invalid_user" y la contraseña "wrong_password"
    Then debería ver un mensaje de error de login

  Scenario: El usuario puede iniciar sesión con credenciales error
    Given que el usuario está en la página de login
    When ingresa el usuario "invalid_user" y la contraseña "wrong_password"
    Then debería ver la página de productos