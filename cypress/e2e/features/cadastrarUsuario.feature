#language: pt
Funcionalidade: Registro de um novo Usuario
    Como usuario comum
    Desejo Registrar minhas informaçoes de usuario
    Para acessar a plataforma

Contexto:Deve ter acessado a funcionalidade de registro
  Dado que acessei a funcionalidade de registro

Cenário: Registro de novo usuário com credenciais validas
  Quando eu informar um novo nome valido
  E informar o email valido
  E informar uma senha valida
  E confirmar a senha
  E confirmar o registro
  Então serei registrado com sucesso
  E serei registrado como usuario do tipo comum

Cenário: Não deve ser possivel cadastrar um usuario com senha invalida
  Quando eu informar um novo nome valido
  E informar o email valido
  E informar uma senha "<senha>"
  E confirmar o registro
  Então irei visualizar erro no registro de senha "<mensagem>"
Exemplos:
| senha           | mensagem                                  |
| 12345           | A senha deve ter pelo menos 6 dígitos.    |
| 1               | A senha deve ter pelo menos 6 dígitos.    |
| 123456789asdf   | A senha deve ter no máximo 12 dígitos.    |
|                 | Informe a senha                           |

Cenário: Não deve ser possivel cadastrar um usuario com confirmação de senha divergente
  Quando eu informar um novo nome valido
  E informar o email valido
  E informar uma senha valida
  E confirmar a senha com caracteres diferentes
  E confirmar o registro
  Então irei visualizar erro no registro de senha "As senhas devem ser iguais."

Cenário: Não deve ser possivel cadastrar um usuario com email invalido
  Quando eu informar um novo nome valido
  E informar o email "<email>"
  E informar uma senha valida
  E confirmar a senha
  E confirmar o registro
  Então irei visualizar erro no registro de email "<mensagem>"
Exemplos:
| email         | mensagem                                 |
| teste.com     | Não foi possível cadastrar o usuário.    |
| teste@teste   | Não foi possível cadastrar o usuário.    |
| @.com         | Não foi possível cadastrar o usuário.    |
| teste         | Não foi possível cadastrar o usuário.    |

Cenário: Nao deve ser possivel cadastrar usuario com email ja utilizado
  Quando eu informar um novo nome valido
  E informar o email ja resgistrado
  E informar uma senha valida
  E confirmar a senha
  E confirmar o registro
  Então irei visualizar a mensagem de falha no cadastro "E-mail já cadastrado. Utilize outro e-mail"

Cenário: Nao deve ser possivel cadastrar usuario sem preencher o nome
  Quando informar o email valido
  E informar uma senha valida
  E confirmar a senha
  E confirmar o registro
  Então irei visualizar a mensagem de alerta "Informe o nome"

# Cenário: Usuário sempre deve ser criado com o tipo comum
#   Quando eu informar um novo nome valido
#   E informar o email valido
#   E informar uma senha valida
#   E confirmar a senha
#   E confirmar o registro
#   Então serei registrado como usuario do tipo comum