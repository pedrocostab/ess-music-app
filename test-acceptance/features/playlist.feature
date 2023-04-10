Feature: Criação de uma playlist
	Como um usuário da plataforma
	Eu quero poder criar várias playlists
	Para que eu possa adicionar novas músicas

Scenario: Criando nova playlist
	Given Eu estou logado como "icaroGeovany"
	And Eu estou na página "Minhas Playlists"
	When Eu clico na opção "Criar uma nova playlist"
	And O sistema exibe uma tela para adicionar o nome, descrição e privacidade
	And Preencho o campo "Nome" com "Playlist de Natal"
	And Preencho o campo "descrição" com "Playlist das músicas natalinas"
	And Seleciono o campo "privacidade" com "Playlist de Natal"

	And Preencho todos os campos com respectivamente "Playlist de Natal", "Playlist das músicas natalinas" e seleciona opção "Pública"
	And Eu clico em "Criar Playlist"
	Then Eu estou na página da playlist "Playlist de Natal"

Scenario: Erro na criação de uma nova playlist
	Given Eu estou logado como "jv_soares"
	And Eu estou na página "Minhas Playlists"
	When Eu clico na opção "Criar uma nova playlist"
	And O sistema exibe uma tela para adicionar "nome", "descrição" e "privacidade"
	And Eu escrevo "Músicas do barcelona" em "nome"
	And Eu escrevo "Músicas do melhor time do mundo" em "descrição"
	And Eu não seleciono o tipo de privacidade em "privacidade"
	And Eu clico em "Criar Playlist"
	Then Eu recebo uma mensagem de erro "Um ou mais campos obrigatórios não preenchidos"
