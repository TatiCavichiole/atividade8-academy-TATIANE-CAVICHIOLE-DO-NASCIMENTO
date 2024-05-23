// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import { faker } from "@faker-js/faker";
// const namecommands = faker.person.Name();
// const emailcommands = faker.internet.email(); 
import { faker } from "@faker-js/faker";

const nome = "testeraro"

const senha = "123456";
let emailCriado;
let  id;
Cypress.Commands.add("novoUsuario", function () {

    return cy.request({
      method: "POST",
      url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
      body: {
        name: nome,
        email: faker.internet.email(),
        password: senha
      },
    })
    .as("usuarioRegistrado")
    .then(function(response){
      id = response.body.id;
      emailCriado = response.body.email;
     
    });
});

Cypress.Commands.add("logarUsuario", function () {
  cy.visit("/login");
    cy.get("@usuarioRegistrado").then(function (usuario) {
      cy.get('[name="email"]').type(emailCriado);
      cy.get('[name="password"]').type(senha);
      cy.get('.login-button').click();
})
});


Cypress.Commands.add('deletarUsuario', function (id) {
  cy.get("@usuarioRegistrado").then(function(usuario){  
  cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
        body: {
          email: emailCriado,
          password: senha,
        },
      })
      .then(function(response){
          const token = response.body.accessToken;
          cy.request({
            method: "PATCH",
            url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin",
            headers: {
              Authorization: "Bearer " + token,
            },
          })
        .then(function() {
  cy.request({
          method: "DELETE",
          url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/" + id,
          headers: {
          Authorization: "Bearer " + token,
            },
          }).then(function(deleteResponse) {
            expect(deleteResponse.status).to.equal(200);
          });
        });
      });
    });
  });