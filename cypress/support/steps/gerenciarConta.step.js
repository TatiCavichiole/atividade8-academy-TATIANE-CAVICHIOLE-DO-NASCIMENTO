import {Given, When, Then, Before, After,} from "@badeball/cypress-cucumber-preprocessor";
 
  import GerenciarPage from "../pages/gerenciarConta.page";
  const paginaGerenciar = new GerenciarPage();
  const nome = "testeraro"
  const novoNome = "testeraro123"
  const novaSenha = "teste123"
  const senha = "123456";
  
  Before( function () {
    cy.novoUsuario();
      cy.logarUsuario().as("usuarioCriadoLogado");
      });
   

  
  // After( function () {
  //   cy.deletarUsuario();
  // });
  
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
    cy.get(paginaGerenciar.inputNome).clear().type(novoNome);
    })

  When('informar uma nova senha', function () {
    
    cy.get(paginaGerenciar.inputSenha).clear().type(novaSenha);
     
    });

  When('informar uma senha {string}', function (senha) {
      paginaGerenciar.clickAlterarSenha();
     cy.get(paginaGerenciar.inputSenha).clear().type(senha);
  
    });
  
  When('confirmar a senha {string}', function (senha) {
     cy.get(paginaGerenciar.inputConfirmSenha).clear().type(senha);
    });
  
  When('confirmar a senha com os mesmos caracteres', function () {
    paginaGerenciar.clickConfirmarSenha();
    cy.get(paginaGerenciar.inputConfirmSenha).type(novaSenha);
        
    })
    
  When('confirmar a senha com caracteres diferentes', function () {
    paginaGerenciar.typeConfirmSenha(senha + "asdf");
    });
          
  
  When('salvar as alterações', function () {
    paginaGerenciar.clickSalvar();
  });

  When("devera atualizar o nome",function () {
    cy.get(paginaGerenciar.cadastroSucesso).should("contain", "Sucesso");
    paginaGerenciar.clickOk();
    cy.wait(4000);
    cy.get(paginaGerenciar.inputNome).should("have.value", novoNome);
});

  When("deve atualizar a senha",function () {
  cy.get(paginaGerenciar.cadastroSucesso).should("contain", "Sucesso");
  paginaGerenciar.clickOk();
  cy.wait(4000);
  cy.get(paginaGerenciar.inputSenha).should("have.value", novaSenha);
});
  
  When('acessar a opçao de alterar senha', function () {
  paginaGerenciar.clickAlterarSenha();
});
  
  When('tentar alterar o email e tipo de usuario', function () {
  paginaGerenciar.clickImputEmail();
  paginaGerenciar.clickTipoUsuario();
});

  hen("os campos de email e tipo deverao estar desabilitados.", function () {
  cy.get(paginaGerenciar.inputEmail).should("be.disabled");
  cy.get(paginaGerenciar.labelTipoUser).should("be.disabled");
});

  Then("receberei mensagem de Sucesso {string}", function () {
    cy.get(paginaGerenciar.cadastroAtualizado).should(
      "contain", "Informações atualizadas!");
  });

  Then("irei visualizar erro no registro de senha {string}", function (mensagem) {
    cy.get(paginaGerenciar.erroSenha).contains(mensagem);
  });


 
 

  
