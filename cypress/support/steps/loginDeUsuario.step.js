import { Given, When, Then, Before,  } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/loginDeUsuario.page";

  const paginaLogin = new LoginPage();
  
 const senha = "123456";
  let emailCriado;
  
  Before( function () {
    cy.novoUsuario().as("usuarioRegistrado")
    });
   

  Given("que acessei a funcionalidade de login de usuário", function () {
    cy.visit("/login");
  });
  
  Given("possuo um usuário Registrado no sistema", function () {
    cy.get("@usuarioRegistrado").then(function(response){
     
      emailCriado = response.body.email;
    });
  
  });
  
  When("preencher o e-mail e senhas válidas", function () {
    cy.logarUsuario();
  });

  When("preencher o e-mail válido", function () {
    cy.get('[name="email"]').type(emailCriado);
  });

  When("preencher o e-mail válido {string}", function (email) {
    cy.get('[name="email"]').type(email);
  });

  When("executar o login", function () {
    paginaLogin.clickLogin();
  });
  
  When("nao preencher o campo e-mail", function () {
  
  }); 

  When("nao preencher o campo senha", function () {
  
  });

  When("informar a senha válida", function () {
    cy.get('[name="password"]').type(senha);
  });

  When("informar o e-mail não cadastrado {string}", function (email) {
    cy.get('[name="email"]').type(email);
  });

  When("informar a senha não cadastrada {string}", function (senha) {
    cy.get('[name="password"]').type(senha);
  });

  When("informar o e-mail inválido {string}", function (email) {
    cy.get('[name="email"]').type(email);
  });

  When("informar a senha  inválida {string}", function (senha) {
    cy.get('[name="password"]').type(senha);
  });

  Then("o sistema exibirá o alerta de erro {string}", function (mensagem) {
    cy.get(paginaLogin.falhaLogar).should("contain", mensagem);
  });

  Then("o sistema exibirá a mensagem de erro no email {string}", function (mensagem) {
    cy.get(paginaLogin.erroEmail).should("contain", mensagem);
  });

  Then("o sistema exibirá a mensagem de erro na senha {string}", function (mensagem) {
    cy.get(paginaLogin.erroSenha).should("contain", mensagem);
  });
  
  
  Then("o usuário será logado e direcionado para página inicial do sistema", function () {
    cy.url().should(
      "eq",
      "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
    );
    cy.get('[href= "/profile"]').should('be.visible');
  });

  When(
    "o usuário não será logado",
    function () {
      cy.url().should(
        "not.eq",
        "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
      );
      cy.url().should('eq', 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    }
  );
 