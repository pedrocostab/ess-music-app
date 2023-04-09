Feature: CRUD de artista
    Como usuário Administrador
    Quero cadastrar artistas
    Para cadastrar álbuns e músicas


Scenario: Cadastrando artista
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo artista"
    When Preencho os campos "nome do artista", "gênero musical" e "url_foto" com os valores "Bruno Miranda", "Pop" e "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Artista cadastrado!"


Scenario: Cadastrando artista com nome vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo artista"
    When Preencho os campos "nome do artista", "gênero musical" e "url_foto" com os valores "", "Forró" e "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=400"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "nome do artista" fica realçado


Scenario: Cadastrando artista com gênero musical vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo artista"
    When Preencho os campos "nome do artista", "gênero musical" e "url_foto" com os valores "André Rouche", "" e "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "gênero musical" fica realçado


Scenario: Cadastrando artista com link para foto vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo artista"
    When Preencho os campos "nome do artista", "gênero musical" e "url_foto" com os valores "Ivete Saganlo", "Indie" e ""
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "url_foto" fica realçado
