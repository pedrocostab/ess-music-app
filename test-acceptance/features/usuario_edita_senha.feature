Feature: Registration and maintenance of Users (insert, remove, update)
    As a "Dizer" user
    I want to change my password
    And delete my account


Scenario: User logged in wants to change his password
    Given I am logged in with user "pcsb" and password "pcsb01"
    And I am on the "Editar Perfil" page
    When I click on "Alterar Senha"
    And I write "pcsb01" in "Nova Senha"
    And I click on "Alterar"
    Then I see a password changed successfully message

Scenario: User logged in wants to change his password to a less than 6 digits password
    Given I am logged in with user "pcsb" and password "pcsb01"
    And I am on the "Editar Perfil" page
    When I click on "Alterar Senha"
    And I write "01pcs" in "Nova Senha"
    And I click on "Alterar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Nova Senha" field highlighted

Scenario: User logged in wants to change his password without password
    Given I am logged in with user "pcsb" and password "pcsb01"
    And I am on the "Editar Perfil" page
    When I click on "Alterar Senha"
    And I write " " in "Nova Senha"
    And I click on "Alterar"
    Then I get a Registration Error message "Por favor colocar um dado válido"
    And I see the "Nova Senha" field highlighted
    
Scenario: Logged in user wants to delete his account
    Given I am logged in with user "pcsb2" and password "pcsb01"
    And I am on the "Editar Perfil" page
    When I click on "Deletar Perfil"
    And I click "Sim"
    Then I am logged out on the "Pagina Inicial" page

