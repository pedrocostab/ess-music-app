Feature: Registration and maintenance of Users (insert, remove, update)
    AS A "Dizer" employee
    I WANT TO insert new users
    AND remove existing users
    AND update existing users information
    SO THAT users could login at the "Dizer"
    AND users could update theirs information at the "Dizer"

Scenario: Registering new users
    Given I am on the "New User Registration" page
    When I write "Pedro Basilio" in "Name"
    And I write "pcsb@cin.ufpe.br" in "e-mail"
    And I write "000000" in "Password"
    And I click on "Register"
    Then I see a registration completed message
