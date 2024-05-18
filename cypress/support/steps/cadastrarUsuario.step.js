import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastrarPage from "../pages/cadastarUsuario.page";
const paginaCadastro = new cadastrarPage();
Given("que acessei a funcionalidade de cadastro Novo", function () {
  cy.visit("https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/");
});
