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

// Cypress.Commands.add("usuarioCommands", function () {
//     return cy.request({
//       method: "POST",
//       url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
//       body: {
//         name: namecommands,
//         email: emailcommands,
//       },
//     });
//   });
// Cypress.Commands.add('deletarUsuario', function (id) {
//     cy.request('DELETE', 'users/' + id);
//   });

//   Cypress.Commands.add('deletarUsuario', function (id) {
//     cy.request('DELETE', 'users/' + id);
//   });