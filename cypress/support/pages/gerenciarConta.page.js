export default class GerenciarPage {
    
    perfilUsuario = '[href= "/profile"]';
    gerenciarConta = '[href= "/account"]';
    
    inputNome = 'input.profile-input[name="name"]';
    inputEmail = 'input.profile-input[name="email"]';
    inputSenha = 'input.profile-input[name="password"]';
    inputConfirmSenha = 'input.profile-input[name="confirmPassword"]';

    cadastroSucesso = ".modal-body > h3";
    cadastroAtualizado = ".error-message";
    erroSenha = ".input-error";
    erroEmail = ".error-message";
    alertaNome = ".input-error";
    tipoUsuario = "input.profile-input[name='type']"
    formularioUsuario = ".account-container"

    buttonAlterarSenha = ".account-password-button";
    buttonLogin = ".login-button";
    buttonSalvar = ".account-save-button";
    buttonOk = ".modal-actions > button";

    typeNome(nome){
      cy.get(this.inputNome).type(nome);
    }

    typeEmail(email){
      cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha){
      cy.get(this.inputSenha).type(senha);
    }

    typeConfirmSenha(senha){
      cy.get(this.inputConfirmSenha).type(senha);
    }
   
    clickPerfil(){
      cy.get(this.perfilUsuario).click();
    }

    clickGerenciar(){
      cy.get(this.gerenciarConta).click();
    }
    clickLogin() {
        cy.get(this.buttonLogin).click();
      }
    
    clickAlterarSenha() {
        cy.get(this.buttonAlterarSenha).click();
      }
    
    clickConfirmarSenha() {
        cy.get(this.inputConfirmSenha).click();
      }
    
    clickSalvar() {
        cy.get(this.buttonSalvar).click();
      }

    clickOk() {
        cy.get(this.buttonOk).click();
      }
    
    clickImputEmail(){
        cy.get(this.inputEmail).click();
      }

    clickTipoUsuario(){
        cy.get(this.tipoUsuario).click();
      }

  }