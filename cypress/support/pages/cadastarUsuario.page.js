export default class cadastrarPage {
    novoRegistro = '[href= "/register"]';
    perfilUsuario = '[href= "/profile"]';
    gerenciarConta = '[href= "/account"]';
    buttonCadastrar = ".account-save-button";
    buttonOkCadastro = ".modal-actions > button"


    inputNome = 'input.profile-input[name="name"]';
    inputEmail = 'input.profile-input[name="email"]';
    inputSenha = 'input.profile-input[name="password"]';
    inputConfirmSenha = 'input.profile-input[name="confirmPassword"]';

    cadastroSucesso = ".error-message";
    erroSenha = ".input-error";
    erroEmail = ".error-message";
    alertaNome = ".input-error";
    tipoUsuario = ":nth-child(3) > .profile-input"


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
    clickButtonCadastrar(){
      cy.get(this.buttonCadastrar).click();
    }

    clickPerfil(){
      cy.get(this.perfilUsuario).click();
    }

    clickGerenciar(){
      cy.get(this.gerenciarConta).click();
    }
  }
  