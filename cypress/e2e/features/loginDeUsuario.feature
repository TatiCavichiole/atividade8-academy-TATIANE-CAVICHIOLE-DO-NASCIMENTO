#language: pt

Funcionalidade: Logar usuário Registrado
Como um usuário registrado no sistema
Desejo efetuar login para acessar as funcionalidades do sistema


Contexto: Deve acessar o login
Dado que acessei a funcionalidade de login de usuário 
E possuo um usuário Registrado no sistema

Cenário: Deve ser possível logar com credencias validas
Quando preencher o e-mail válido
E informar a senha válida
E executar o login
Então o usuário será logado e direcionado para página inicial do sistema

Cenário: Não deve ser possível logar sem preencher o campo e-mail
Quando nao preencher o campo e-mail
E informar a senha válida
E executar o login
Então o usuário não será logado
E o sistema exibirá a mensagem de erro "Informe o e-mail"

Cenário: Não deve ser possível logar sem preencher o campo senha
Quando preencher o e-mail válido
E nao preencher o campo senha
E executar o login
Então Então o usuário não será logado
E o sistema exibirá a mensagem de erro "Informe a senha"

Esquema do Cenário: Não deve ser possível logar com e-mail e senha não cadastrados
Quando informar o e-mail não cadastrado "<email>" 
E informar a senha não cadastrada "<senha>" 
E executar o login
Então Então o usuário não será logado
E o sistema exibirá o alerta de erro "Usuário ou senha inválidos."
Exemplos:
|  email                                    |  senha   |
|  t4tynaoepossivel@testeraro.com           |  asdfgh  |
|  pedregunda222naoepossivel@testeraro.com  |  123456  |
|  jurubeba111naoepossivel@testeraro.com    |  789456  |


Esquema do Cenário: Não deve ser possível logar com e-mail e senha inválidos
Quando informar o e-mail inválido "<email>" 
E informar a senha  inválida "<senha>" 
E executar o login
Então Então o usuário não será logado 
E o sistema exibirá o alerta de erro "Usuário ou senha inválidos."
Exemplos:
|  email         |  senha  |
|  teste@teste   |  asdf   |
|  teste.com     |   1234  |
|  teste         |   A     |
|  @teste        |   1a2   |


