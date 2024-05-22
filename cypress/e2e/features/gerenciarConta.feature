#language: pt
Funcionalidade: Gerenciar conta de Usuario
    Como usuario logado
    Desejo gerenciar minhas informaçoes de usuario
    Para atualizar minhas informacoes


Contexto:Deve estar logado no site
  Dado que possuo usuario cadastrado e logado no sistema


Cenário: Deve ser possivel alterar nome
  Quando acessar o perfil do usuario
  E acessar a funcionalidade gerenciar conta
  E informar um novo nome
  E salvar as alterações
  Entao receberei mensagem de Sucesso "Informações atualizadas!"
  E devera atualizar o nome

Cenário: Deve ser possivel alterar senha
  Quando acessar o perfil do usuario
  E acessar a funcionalidade gerenciar conta
  E informar uma nova senha
  E confirmar a senha com os mesmos caracteres
  E salvar as alterações
  Então receberei mensagem de Sucesso "Informações atualizadas!"
  E deve atualizar a senha

Cenário: Não deve ser possivel atualizar a senha com formato de senha invalida
  Quando acessar o perfil do usuario
  E acessar a funcionalidade gerenciar conta
  E informar uma senha "<senha>"
  E confirmar a senha "<senha>"
  E salvar as alterações
  Então irei visualizar erro no registro de senha "<mensagem>"
Exemplos:
| senha           | mensagem                                  |
| asdfg           | A senha deve ter pelo menos 6 dígitos.    |
| a               | A senha deve ter pelo menos 6 dígitos.    |
| asdfg12345678   | A senha deve ter no máximo 12 dígitos.    |


Cenário: Não deve ser possivel atualizar a senha com confirmação de senha divergente
  Quando acessar o perfil do usuario
  E acessar a funcionalidade gerenciar conta
  E acessar a opçao de alterar senha
  E informar uma senha valida
  E confirmar a senha com caracteres diferentes
  E confirmar o registro
  Então irei visualizar erro no registro de senha "As senhas devem ser iguais."

Cenário: Não deve ser possivel atualizar o email
  Quando acessar o perfil do usuario
  E acessar a funcionalidade gerenciar conta
  E tentar alterar o email
  Então o campo de email devera estar desabilitado.