import { faker } from '@faker-js/faker';

describe('Exercício Final - Testes de ponta a ponta', () => {

    it('Deve realizar o cadastro, adicionar um produto ao carrinho e validar', () => {
        cy.intercept('PUT', '**/public/updateCart/**').as('updateCartApi');
        cy.setCookie('ebacStoreVersion', 'v2'); 
        cy.visit('http://lojaebac.ebaconline.art.br/'); 

        const nome = faker.person.firstName();
        const sobrenome = faker.person.lastName();
        const telefone = faker.phone.number('## #####-####'); 
        const email = faker.internet.email({ firstName: nome });
        const senha = faker.internet.password({ length: 10 }); 

        
        cy.get('[href="/Tab/Account"]').click();
        cy.get('[data-testid="signUp"]').click();

        cy.get('[data-testid="firstName"]').type(nome);
        cy.get('[data-testid="lastName"]').type(sobrenome);
        cy.get('[data-testid="phone"]').type(telefone);
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email);
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha);
        cy.get('[data-testid="repassword"]').type(senha); 

        cy.get('[data-testid="create"]').click();

        cy.get('[style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]').should('contain', 'EBAC Store');
        
        cy.wait(2000); 

        

        cy.get(':nth-child(28) > .r-1nteefp > .r-1awozwy').click();
        cy.get('[style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 445px;"] > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.wait('@updateCartApi');
        cy.contains('My Cart').should('be.visible');
    });
});