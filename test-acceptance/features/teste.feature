Feature: Registration and maintenance of Users (insert, remove, update)
    As a "Dizer" employee
    I want to insert new users
    And remove existing users
    And update existing users information
    So that users could login at the "Dizer"
    And users could update theirs information at the "Dizer"

Scenario: Registering new users
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "Pedro Basilio", "pcsb01" and "pcsb1@cin.ufpe.br"
    And I click on "Enviar"
    Then I see a registration completed message

Scenario: Register new User with an invalid email
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "Pedro Basilio", "pcsb01" and "pcsb1"
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Email" field highlighted
