import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastrarPage from "../pages/cadastarUsuario.page";
import { faker } from '@faker-js/faker';
const paginaCadastro = new cadastrarPage();
const nome = "teste"
const email = faker.internet.email();
const senha = 123456;
  
Before( function () {
    cy.novoUsuario().as("usuarioCriado");
    
      });
   

  Given("que acessei a funcionalidade de login de usuário", function () {
    cy.visit("/login");
  });
  
  Given("possuo um usuário Registrado no sistema", function () {
    cy.get("@usuarioCriado");
  });
  
  When("preencher o e-mail válido", function () {
    cy.get("@usuarioCriado").then(function (usuario) {
      paginaLogin.typeEmail(usuario.body.email);
    });
  });
  
  When("informar a senha", function () {
    paginaLogin.typeSenha("123456");
  });
  
  When("acessar a função login", function () {
    paginaLogin.clickButtonLogar();
  });
  
  When("não informar o e-mail", function () {});
  
  When("não informar a senha", function () {});
  
  When("informar o e-mail {string} inválido", function (email) {
    paginaLogin.typeEmail(email);
  });
  When("informar a senha {string} inválida", function (senha) {
    paginaLogin.typeSenha(senha);
  });
  
  When("informar o e-mail {string} não cadastrado", function (email) {
    paginaLogin.typeEmail(email);
  });
  
  When("informar a senha {string} não cadastrada", function (senha) {
    paginaLogin.typeSenha(senha);
  });
  
  Then(
    "o usuário será logado com sucesso e direcionado para página inicial do sistema",
    function () {
      cy.url().should(
        "eq",
        "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
      );
    }
  );
  
  Then("o sistema exibirá a mensagem de erro {string}", function (mensagem) {
    cy.get(paginaLogin.labelErroEmail).should("contain", mensagem);
  });
  
  Then(
    "o usuário não será logado e não será direcionado para página inicial do sistema",
    function () {
      cy.url().should(
        "not.eq",
        "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
      );
    }
  );
  
  Then("o sistema exibirá o alerta de erro {string}", function (mensagem) {
    cy.get(paginaLogin.labelFalhaAutenticar).should(
      "contain",
      "Falha ao autenticar"
    );
    cy.get(paginaLogin.labelUsuarioInválido).should("contain", mensagem);
    paginaLogin.clickButtonOk();
  });