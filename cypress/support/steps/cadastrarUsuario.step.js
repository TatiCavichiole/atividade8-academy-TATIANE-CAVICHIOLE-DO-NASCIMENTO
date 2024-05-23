import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastrarPage from "../pages/cadastarUsuario.page";
import { faker } from '@faker-js/faker';
import GerenciarPage from "../pages/gerenciarConta.page";
const paginaCadastro = new cadastrarPage();
const paginaGerenciar = new GerenciarPage();
const nome = "teste"
const email = faker.internet.email();
const senha = 123456;
Given("que acessei a funcionalidade de registro", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register");
});

When('eu informar um novo nome valido', function () {
 
  paginaCadastro.typeNome(nome);
});

When('informar o email valido', function () {  
  
  paginaCadastro.typeEmail(email);
});

When('informar uma senha valida', function () {
 
  paginaCadastro.typeSenha(senha);
});

When('confirmar a senha', function () {
  paginaCadastro.typeConfirmSenha(senha);
});

When('confirmar a senha com caracteres diferentes', function () {
  paginaCadastro.typeConfirmSenha(senha + "asdf");
});

When('confirmar o registro', function () {
  cy.intercept(
    'POST',
    'https://raromdb-3c39614e42d4.herokuapp.com/api/users'
  ).as('postUser');
  paginaCadastro.clickButtonCadastrar();
});

When('informar uma senha {string}', function (senha) {
  paginaCadastro.typeSenha(senha);
});

When('informar o email {string}', function (email) {
  paginaCadastro.typeEmail(email);
});

When('informar o email ja resgistrado', function (email) {
  cy.intercept(
    'POST',
    'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
    {
      statusCode: 409,
      body: {
        error: 'Conflict',
      },
    }).as('postEmail');
  paginaCadastro.typeEmail(faker.internet.email());
});

When('acessar o perfil do usuario', function () {
  cy.novoUsuario();
  cy.logarUsuario().as("usuarioCriadoLogado");
  cy.get('@usuarioCriadoLogado');
  paginaGerenciar.clickPerfil();
  
});

When("acessar a funcionalidade gerenciar conta", function () {
  paginaCadastro.clickGerenciar();
});

Then('irei visualizar erro no registro de senha {string}', function (mensagem) {
  cy.get(paginaCadastro.erroSenha).contains(mensagem);
});

Then('irei visualizar erro no registro de email {string}', function (mensagem) {
  cy.get(paginaCadastro.erroEmail).contains(mensagem);
});

Then('irei visualizar a mensagem de falha no cadastro {string}', function () {
  cy.get(paginaCadastro.erroEmail).contains("E-mail já cadastrado. Utilize outro e-mail");
});

Then('irei visualizar a mensagem de alerta {string}', function () {
  cy.get(paginaCadastro.alertaNome).contains("Informe o nome");
});

Then('serei registrado com sucesso', function () {
  cy.wait('@postUser');
  cy.get(paginaCadastro.cadastroSucesso).contains('Cadastro realizado!');
  //cy.get(paginaCadastro.buttonOkCadastro).should('be.visible').click();
});

Then('dever estar como usuario do tipo comum', function () {
  cy.get(paginaCadastro.tipoUsuario).should("contain", "Comum");
});
  

