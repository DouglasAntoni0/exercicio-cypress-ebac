import { faker } from '@faker-js/faker';

describe('Exercício Final - Testes de ponta a ponta', () => {

    it('Deve realizar o cadastro, adicionar produto, cadastrar endereço e finalizar a compra', () => {
        cy.intercept('PUT', '**/public/updateCart/**').as('updateCartApi');
        cy.setCookie('ebacStoreVersion', 'v2'); 
        cy.visit('http://lojaebac.ebaconline.art.br/'); 

        // --- Geração de Dados Dinâmicos ---
        const nome = faker.person.firstName();
        const sobrenome = faker.person.lastName();
        const telefone = '33999653200'; // Usando número fixo
        const email = faker.internet.email({ firstName: nome });
        const senha = faker.internet.password({ length: 10 }); 

        // --- Fluxo de Cadastro ---
        cy.get('[href="/Tab/Account"]').click();
        cy.get('[data-testid="signUp"]').click();
        cy.get('[data-testid="firstName"]').type(nome);
        cy.get('[data-testid="lastName"]').type(sobrenome);
        cy.get('[data-testid="phone"]').type(telefone);
        cy.get('[data-testid="email"]').eq(1).type(email);
        cy.get('[data-testid="password"]').eq(1).type(senha);
        cy.get('[data-testid="repassword"]').type(senha); 
        cy.get('[data-testid="create"]').click();

        // --- Adicionar Produto ao Carrinho ---
        cy.contains('CAT-PROD-1758926136180').click();
        cy.contains('Tuna').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.wait('@updateCartApi');

        // --- Cadastrar Novo Endereço ---
        cy.contains('My Cart').should('be.visible');
        cy.get('[data-testid="addNewAddress"]').click();
        cy.get('input[placeholder="Enter your name"]').type(`${nome} ${sobrenome}`);
        cy.get('input[placeholder="Enter your mobile number"]').type(telefone);
        cy.get('input[placeholder="Enter your address"]').type(faker.location.streetAddress());
        cy.get('input[placeholder="City"]').type(faker.location.city());
        cy.get('input[placeholder="State"]').type(faker.location.state());
        cy.get('input[placeholder="ZipCode"]').type(faker.location.zipCode());
        cy.get('[data-testid="save"]').click();
        cy.contains(`${nome} ${sobrenome}`).should('be.visible');

        // --- Finalizar a Compra ---
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();
        cy.get('[data-testid="completeCheckout"]').click();

        // --- Validação Final do Pedido ---

        cy.contains('Order Success').should('be.visible');
        cy.get('[data-testid="goBackHome"]').should('be.visible');
    });
});