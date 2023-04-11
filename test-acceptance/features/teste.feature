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

Scenario: Register new User with password less than 6 digits
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "Pedro Basilio", "pcsb1" and "pcsb1@cin.ufpe.br"
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Senha" field highlighted

Scenario: Registering new users without user
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "", "Pedro Basilio", "pcsb01" and "pcsb1@cin.ufpe.br"
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Usuario" field highlighted

Scenario: Registering new users without email
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "Pedro Basilio", "pcsb01" and ""
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Email" field highlighted

Scenario: Registering new users without password
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "Pedro Basilio", "" and "pcsb1@cin.ufpe.br"
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Senha" field highlighted

Scenario: Registering new users without name
    Given I am on the "Registro de novo usuário" page
    When I fill the fields "Usuario", "Nome", "Senha" and "Email" with the values "pcsb1", "", "pcsb01" and "pcsb1@cin.ufpe.br"
    And I click on "Enviar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Nome" field highlighted

Scenario: Administrator wants to edit a User from the system
    Given I am logged in with an admin account with user "admin@dizer.com" and password "admin"
    And I am on the "Lista de Usuários" page
    And I see a list of system users
    And I see the collumns "Usuario", "Nome", "Email", "Tipo de Usuário" and "Status" with the values "pcsb", "Pedro Basilio", "pcsb@cin.ufpe.br", "user" and "Ativo"
    When I click on the "Editar" button on the "Usuario" user "pcsb" line
    And I write "Pedro Costa" in "Nome" field, "pcsb02" in "Senha" field, "pcsb2@cin.ufpe.br" in "Email" field
    And I click "Atualizar"
    Then I see a success message "Informação alterada com sucesso!"
    And I see a list of system users
    And I see the collumns "Usuario", "Nome", "Email", "Tipo de Usuário" and "Status" with the values "pcsb", "Pedro Costa", "pcsb2@cin.ufpe.br", "user" and "Ativo"


    