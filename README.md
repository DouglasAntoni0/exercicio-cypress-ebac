# Exercício Cypress EBAC - Fluxo E2E Completo

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Faker](https://img.shields.io/badge/Faker-dados%20dinamicos-0A66C2?style=for-the-badge)
![Mochawesome](https://img.shields.io/badge/Mochawesome-relatorio-C21325?style=for-the-badge)

Automação end-to-end com Cypress para a EBAC Shop, cobrindo um fluxo completo de usuário: cadastro, seleção de produto, carrinho, endereço e finalização de pedido.

## O que este projeto demonstra

| Competência | Evidência no projeto |
| --- | --- |
| E2E realista | Fluxo de compra de ponta a ponta em aplicação de e-commerce |
| Massa dinâmica | Uso de `@faker-js/faker` para gerar dados de usuário e endereço |
| Sincronização | Interceptação de API com `cy.intercept` e espera controlada |
| Validação funcional | Assert final em `Order Success` para confirmar fechamento do fluxo |
| Evidência de execução | Configuração com `cypress-mochawesome-reporter` |

## Fluxo automatizado

1. Acessa a EBAC Shop.
2. Cria um usuário com dados dinâmicos.
3. Seleciona categoria e produto.
4. Adiciona item ao carrinho.
5. Cadastra endereço de entrega.
6. Finaliza checkout.
7. Valida sucesso do pedido.

## Como executar

```bash
git clone https://github.com/DouglasAntoni0/exercicio-cypress-ebac.git
cd exercicio-cypress-ebac
npm install
npx cypress run
```

Para execução interativa:

```bash
npx cypress open
```

## Resultado técnico

Este repositório comunica maturidade em automação web porque vai além de cliques isolados: ele organiza um fluxo crítico de negócio, usa dados dinâmicos, sincroniza chamadas de rede e gera evidência de execução. É uma base forte para discutir confiabilidade de testes E2E.
