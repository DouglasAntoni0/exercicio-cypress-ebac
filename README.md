# Exercício Cypress EBAC - Fluxo E2E Completo

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Faker](https://img.shields.io/badge/Faker-dados%20dinamicos-0A66C2?style=for-the-badge)
![Mochawesome](https://img.shields.io/badge/Mochawesome-relatorio-C21325?style=for-the-badge)
![QA](https://img.shields.io/badge/QA-fluxo%20critico-2E7D32?style=for-the-badge)

Automação end-to-end com Cypress para a EBAC Shop, cobrindo um fluxo completo de usuário: cadastro, seleção de produto, carrinho, endereço e finalização de pedido.

Este repositório representa uma automação mais próxima de um cenário real de e-commerce. Em vez de validar apenas uma tela isolada, o teste percorre uma jornada completa e confirma que o usuário consegue chegar ao resultado final esperado.

## Objetivo do projeto

O objetivo é automatizar uma jornada crítica de compra na EBAC Shop, usando Cypress, dados dinâmicos e relatório de execução.

A automação cobre:

- abertura da aplicação;
- criação de usuário;
- seleção de produto;
- adição ao carrinho;
- cadastro de endereço;
- continuação para pagamento;
- finalização do pedido;
- validação da mensagem de sucesso.

## Por que este fluxo importa

Em um e-commerce, o fluxo de compra é uma jornada central. Se cadastro, carrinho, endereço ou checkout falham, o impacto funcional é alto. Automatizar esse tipo de fluxo ajuda a detectar regressões em pontos de negócio relevantes.

## Stack utilizada

| Tecnologia | Papel |
| --- | --- |
| Cypress | Automação E2E no navegador |
| JavaScript | Linguagem dos testes |
| Faker | Geração de massa de dados dinâmica |
| Mochawesome | Relatório de execução |
| Node.js/npm | Runtime e dependências |

## O que este projeto demonstra

| Competência | Evidência no projeto | Valor técnico |
| --- | --- | --- |
| E2E realista | Fluxo de compra de ponta a ponta | Valida integração da jornada do usuário |
| Massa dinâmica | `@faker-js/faker` para usuário e endereço | Reduz repetição e conflito de dados |
| Sincronização | `cy.intercept` e espera por chamada de carrinho | Diminui instabilidade por timing |
| Validação funcional | Assert final em `Order Success` | Confirma resultado de negócio |
| Evidência de execução | Configuração com Mochawesome | Facilita análise pós-execução |

## Fluxo automatizado

1. Acessa a EBAC Shop.
2. Define cookie de versão da loja.
3. Gera nome, sobrenome, e-mail e senha.
4. Cria uma nova conta.
5. Seleciona categoria e produto.
6. Adiciona produto ao carrinho.
7. Aguarda atualização do carrinho pela API.
8. Cadastra novo endereço.
9. Seleciona endereço para pagamento.
10. Finaliza checkout.
11. Valida `Order Success`.

## Estratégia de testes

A estratégia combina três pontos importantes:

- **Fluxo crítico:** o teste cobre uma jornada de valor para o negócio.
- **Dados dinâmicos:** evita depender sempre do mesmo usuário.
- **Sincronização com rede:** usa interceptação para aguardar evento relevante.

Essa combinação torna a automação mais útil do que um teste puramente linear baseado em esperas fixas.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/exercicio-cypress-ebac.git
cd exercicio-cypress-ebac
```

Instale dependências:

```bash
npm install
```

Execute em modo headless:

```bash
npx cypress run
```

Para execução interativa:

```bash
npx cypress open
```

## Evidências e relatórios

O projeto usa `cypress-mochawesome-reporter`, permitindo evoluir a suíte para relatórios HTML com evidências visuais. Isso é relevante para:

- análise de falhas;
- compartilhamento de resultado;
- histórico de execução;
- comunicação com pessoas não técnicas.

## Pontos de atenção

| Ponto | Risco | Mitigação |
| --- | --- | --- |
| Produto específico | Produto/categoria pode mudar | Parametrizar dados ou preparar massa controlada |
| Seletores | Mudanças no DOM podem quebrar teste | Preferir seletores estáveis quando disponíveis |
| Dados dinâmicos | Dados gerados precisam respeitar regras | Validar formato antes de usar |
| Rede | Timing pode gerar flakiness | Usar `cy.intercept` e asserts explícitos |

## Resultado técnico

Este repositório comunica maturidade em automação web porque vai além de cliques isolados: ele organiza um fluxo crítico de negócio, usa dados dinâmicos, sincroniza chamadas de rede e gera evidência de execução. É uma base forte para discutir confiabilidade de testes E2E.

## Competências evidenciadas

- Cypress E2E.
- Fluxos críticos de e-commerce.
- Dados dinâmicos com Faker.
- Interceptação de API.
- Validação final de resultado.
- Relatório com Mochawesome.
- Raciocínio de regressão funcional.

## Possíveis evoluções

- Implementar Page Objects ou App Actions.
- Parametrizar categoria e produto.
- Adicionar cenários negativos de cadastro.
- Integrar execução ao GitHub Actions.
- Publicar relatório como artifact.
- Separar smoke test de regressão completa.

## Conclusão

Este projeto é uma boa vitrine de automação E2E porque conecta ferramenta, dados, fluxo e evidência. Ele mostra a capacidade de pensar em jornada completa e não apenas em comandos isolados do framework.
