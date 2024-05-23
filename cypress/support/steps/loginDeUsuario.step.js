import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/loginDeUsuario.page";
import { faker } from '@faker-js/faker';
const paginaLogin = new LoginPage();
const nome = "testeraro"
const novoNome = "testeraro123"
const novaSenha = "teste123"
const senha = "123456";
  
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
  
