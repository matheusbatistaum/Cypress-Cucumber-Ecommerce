import { Given, When, Then  } from "cypress-cucumber-preprocessor/steps";


Given("Ao entrar no site e clicar nos produtos", ()=>{
    cy.visit('cypress/e2e/pizzaria-da-nonna06/index.html')
    cy.get('[data-key="0"] > a > .pizza-item--add').click()
})

When("Irá escolher o tamanho da pizza e depois escolher a quantidade e por último clicar pra adicionar no carrinho", ()=>{
    cy.get('.selected').click()
    cy.get('.pizzaInfo--qtmais').click()
    cy.get('.pizzaInfo--addButton').click()
})

Then("E por fim, finalizar a compra", ()=>{
    cy.get('.cart--finalizar').click()
})




