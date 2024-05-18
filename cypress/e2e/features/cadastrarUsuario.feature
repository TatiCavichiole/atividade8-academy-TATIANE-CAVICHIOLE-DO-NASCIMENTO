#language: pt
Funcionalidade: Registro de um novo Usuario
    Como usuario comum
    Desejo Registrar minhas informaçoes de usuario
    Para acessar a plataforma

Contexto:Deve ter acessado a funcionalidade de registro
  Dado que acessei a funcionalidade "Registre-se"

Cenário: Registro de novo usuário com credenciais validas
  Quando eu informar um novo nome valido
  E informar o email "<email>"
  E informar uma senha valida
  E confirmar a o registro
  Então o usuario será registrado com sucesso
