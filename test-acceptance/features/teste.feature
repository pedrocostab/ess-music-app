Feature: Registration and maintenance of Users (insert, remove, update)
    As a "Dizer" employee
    I want to insert new users
    And remove existing users
    And update existing users information
    So that users could login at the "Dizer"
    And users could update theirs information at the "Dizer"

Scenario: Administrator wants to edit a User password to a password less than 6 digits
    Given I am logged in with an admin account with user "admin@dizer.com" and password "admin"
    And I'm on the "Lista de Usuários" page
    And I see a list of system users
    And I see the "Usuario" user "pcsb"
    And I see the "email" user "pcsb@cin.ufpe.br"
    And I see the "Nome" user "Pedro Basilio"
    And I see the "Tipo de Usuario" user "Usuario"
    And I see the "Ativo" user field checked
    When I click on the "Editar" button on the "Usuario" user "pcsb" line
    And I write "Pedro Costa" in "Nome" field
    And I write "pcsb0" in "Senha" field
    And I write "pcsb2@cin.ufpe.br" in "Email" field
    And I click "Atualizar"
    Then I get a Error message "Por favor colocar um dado válido"
    And I see the "Senha" field highlighted

Scenario: Administrator wants to edit a User password to a password less than 6 digits
    Given I am logged in with an admin account with user "admin@dizer.com" and password "admin"
    And I am on the "Lista de Usuários" page
    And I see a list of system users
    And I see the collumns "Usuario", "Nome", "Email", "Tipo de Usuário" and "Status" with the values "pcsb", "Pedro Basilio", "pcsb@cin.ufpe.br", "user" and "Ativo"
    When I click on the "Editar" button on the "Usuario" user "pcsb" line
    And I write "Pedro" in "Nome" field, "0" in "Senha" field, "pcostasb@cin.ufpe.br" in "Email" field
    And I click "Atualizar"
    Then I get a Error message "Por favor, insira um dado válido!"
    And I see the "Senha" field highlighted
    