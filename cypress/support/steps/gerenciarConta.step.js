import {Given, When, Then, Before, After,} from "@badeball/cypress-cucumber-preprocessor";
 
  import GerenciarPage from "../pages/gerenciarConta.page";
  const paginaGerenciar = new GerenciarPage();
  const nome = "testeraro"
 const nomeAtualizado = nome + "123";
  const senha = "123456";
  
  Before( function () {
    cy.novoUsuario();
      cy.logarUsuario().as("usuarioCriadoLogado");
      });
   

  
  After( function () {
    cy.deletarUsuario();
  });
  
  Given("que possuo usuario cadastrado e logado no sistema", function () {
    cy.get('@usuarioCriadoLogado');
  });

  Given("acessar o perfil do usuario", function () {
    paginaGerenciar.clickPerfil();
    
  });

  Given("acessar a funcionalidade gerenciar conta", function () {
    paginaGerenciar.clickGerenciar();
  });

  When('informar um novo nome', function () {
    paginaGerenciar.typeNome(nomeAtualizado);
    
  });

  When('salvar as alterações', function () {
    paginaGerenciar.clickSalvar();
  });

  Then(
    "deve atualizar o nome",
    function () {
      cy.get(paginaGerenciar.cadastroSucesso).should("contain", "Sucesso");
      cy.get(paginaGerenciar.cadastroAtualizado).should(
        "contain",
        "Informações atualizadas!"
      );
     
      paginaGerenciar.clickOk();
      cy.get(paginaGerenciar.formularioUsuario).contains("nomeAtualizado");
    }
  );