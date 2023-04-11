Feature: Registration and maintenance of Users (insert, remove, update)
    As a "Dizer" employee
    I want to insert new users
    And remove existing users
    And update existing users information
    So that users could login at the "Dizer"
    And users could update theirs information at the "Dizer"

Scenario: User logged in wants to change his password
    Given I am logged in with user "pcsb" and password "pcsb01"
    And I am on the "Editar Perfil" page
    When I click on "Alterar Senha"
    And I write "01pcsb" in "Nova Senha"
    And I click on "Alterar"
    Then I see a password changed successfully message
    And I click on "Alterar Senha"
    And I write "pcsb01" in "Nova Senha"
    And I click on "Alterar"