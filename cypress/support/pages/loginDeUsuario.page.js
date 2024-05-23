export default class LoginPage {
    inputNome = 'input.profile-input[name="name"]';
    inputEmail = 'input.profile-input[name="email"]';
    inputSenha = 'input.profile-input[name="password"]';
      
    erroEmail = ".input-error";
    falhaLogar = ".modal-body > h3";
    usuarioInvalido = ".error-message";
    tipoUsuario = "input.profile-input[name='type']"
  
    buttonLogin = ".login-button";
    buttonOk = ".modal-actions > button";
  
    tipoUsuario = "input.profile-input[name='type']"
    
    typeEmail(email){
        cy.get(this.inputEmail).type(email);
      }
  
    typeSenha(senha){
        cy.get(this.inputSenha).type(senha);
      }
    
    clickLogin() {
        cy.get(this.buttonLogin).click();
      }
    
    clickPerfil(){
        cy.get(this.perfilUsuario).click();
      }
  
    clickOk() {
        cy.get(this.buttonOk).click();
      }
    
  }