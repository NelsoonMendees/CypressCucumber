import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../support/pages/Login'

const user = {
	login: Cypress.env('USER_NAME'),
	password: Cypress.env('USER_PASSWORD')
}

Given('acessar a pagina de login', () => {
	loginPage.go()
});

When('informar credenciais validas', () => {
	loginPage.form(user)
});

When('clicar em login', () => {
	loginPage.submit()
})

Then('devo visualizar a pagina de produtos', () => {
	loginPage.validateLogin('Products')
});