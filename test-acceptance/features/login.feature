Feature: Login
    As um usuário cadastrado na aplicação
    I want to inserir minhas credênciais de acesso e enviá-las para o servidor de forma segura
    So that eu consiga acessar todas as features internas apenas cabíveis ao meu nível de acesso e ao meu usuário particular, as quais são apenas acessiveis após um processo de autenticação bem sucedido

Scenario: Login Usuário bem sucedido na aplicação
    #Given o usuário "biibii" de senha "123123" está corretamente registrado no sistema com permissões de "user"
    Given eu estou na página "login" da aplicação
    When eu insiro corretamente os dados do campo "Usuário" como "biibii"
    And eu insiro corretamente os dados do campo "Senha" como "123123"
    And eu envio as credênciais para o servidor
    Then eu sou redirecionado para a rota "initial-page"
    And eu vejo que estou logado com o usuário "biibii"
    And eu vejo que estou logado com permissões de "user"