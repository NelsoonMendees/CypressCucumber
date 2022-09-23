Feature: Login

COMO usuário
GOSTARIA de estar autenticado no Sistema
PARA assim conseguir consumir as suas funcionalidades

Scenario: Realizar Login
    Given acessar a pagina de login
    When informar credenciais validas
    And clicar em login
    Then devo visualizar a pagina de produtos