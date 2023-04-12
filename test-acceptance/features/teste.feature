Feature: Registration and maintenance of Users (insert, remove, update)
    As a "Dizer" employee
    I want to insert new users
    And remove existing users
    And update existing users information
    So that users could login at the "Dizer"
    And users could update theirs information at the "Dizer"

Scenario: Administrator wants to add a new User
    Given I am logged in with an admin account with user "admin@dizer.com" and password "admin"
    And I am on the "Lista de Usuários" page
    When I click on "Adicionar Novo Usuario" 
    And I write "drielle" in "Usuario" field, "Drielle" in "Nome" field, "dri012" in "Senha" field, "dri@cin.ufpe.br" in "Email" field and select "Usuario" in "Tipo de Usuario"
    And I click "Adicionar"
    Then I see a success message "Usuário cadastrado com sucesso"
