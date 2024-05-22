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
const email = faker.internet.email();
const senha = 123456;
let idUsuario = id;
Cypress.Commands.add("novoUsuario", function () {

    return cy.request({
      method: "POST",
      url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
      body: {
        name: nome,
        email: email,
        password: senha
      },
    })
      .as("usuarioRegistrado")
      .then((response) => {
        id = response.body.id;
        emailCadastrado = response.body.email;
      });
  });

Cypress.Commands.add("logarUsuario", function () {
  cy.visit("/login");
    cy.get("@usuarioRegistrado").then(function (usuario) {
      paginaGerenciar.typeEmail(emailCadastrado);
      paginaGerenciar.typeSenha(senha);
      paginaGerenciar.clickLogin();
    });
});


Cypress.Commands.add('deletarUsuario', function (id) {
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
        body: {
          email: email,
          password: senha,
        },
      })
        .as("logarUsuario")
        .then((response) => {
          token = response.body.accessToken;
          cy.request({
            method: "PATCH",
            url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin",
            headers: {
              Authorization: "Bearer " + token,
            },
          }).as("promoverAdmin");
        })
        .then(() => {
          cy.request({
            method: "DELETE",
            url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/" + id,
            headers: {
              Authorization: "Bearer " + token,
            },
          }).as("deletarUsuario");
        });

    });
