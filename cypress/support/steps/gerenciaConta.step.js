import {Given, When, Then, Before, After,} from "@badeball/cypress-cucumber-preprocessor";
 
  import GerenciarPage from "../pages/gerenciarConta.page";
  const paginaGerenciar = new GerenciarPage();
  var token;
  var id;
  var emailCadastrado;
  
  Before({ tags: "@usuario" }, function () {
   cy.novoUsuario().then(function(usuarioCriado){
    expect(usuarioCriado.login.status).to.equal(201);
   })
   cy.logarUsuario().then(function(usuarioLogado){
    expect(usuarioLogado.login.status).to.equal(201);
    })
  });
  
  After({ tags: "@novoUsuario" }, function () {
    cy.deletarUsuario().then(function(usuarioApagado){
        expect(usuarioApagado.login.status).to.equal(201);
    })
  });
  