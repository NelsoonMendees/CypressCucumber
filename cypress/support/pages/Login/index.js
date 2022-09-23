import {el} from './elements'

class LoginPage {
    go(){
        cy.visit('/')
    }

    form(user){
        cy.get(el.username).type(user.login, {log: false})
        cy.get(el.password).type(user.password, {log: false})
    }
    
    submit(){
        cy.get(el.submit).click()
    }

    validateLogin(validate){
        cy.contains(el.title, validate).should('be.visible')
    }
}

export default new LoginPage()