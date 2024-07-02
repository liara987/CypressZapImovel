# Case Técnico OLX - Desenvolvimento com foco em Qualidade

[![Cypress Tests - Zap Imóveis Home Page](https://github.com/liara987/CypressZapImovel/actions/workflows/cypress-zap-imoveis.yml/badge.svg)](https://github.com/liara987/CypressZapImovel/actions/workflows/cypress-zap-imoveis.yml)

## Tecnologias
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) **v13.12.0**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) **v20.13.1**

## Como testar

Observação: Os testes foram realizado no browse **Electron** do cypress, caso utilize outro browser os testes podem não iniciar

- Tenha o **git** instalado
- Clone o repositório ```git clone https://github.com/liara987/CypressZapImovel.git```
- Acesse a na pasta do projeto no terminal e digite ```cd cypress-zap-imoveis```
- Instale as dependencias ```npm i```
- Rode ```npm run cypress:headless``` para ver os testes apenas no terminal
- Rode o comando ```npm run cypress:web``` para ver os testes no navegador
- Click en **E2E Testing**
- Selecione o navegador **Electron**
- Click em **Start E2E Testing in Electron**
- Click no arquivo **HomePage.cy.js** para testar o caminho de sucesso da pesquisa no site
- Click no arquivo **HomePageFailScenario.cy.js** para testar o caminho de falha da pesquisa no site
- Os testes devem começar a rodar

## Fluxograma
![imagem do fluxograma](./cypress-zap-imoveis/reports-images/Fluxograma.png)

## Cenários Sucesso Testado

- [x] Given I am on the **Zap Imóveis** page
- [x] And I type on home input **São Paulo**
- [x] And I click on home **São Paulo - SP** checkbox
- [x] And I click on the button **Alugar**
- [x] And I click on home dropdown **Tipo de imovel**
- [x] And I click on home option **Cobertura**
- [x] When I click on home button **Buscar**
- [x] Then the text **Coberturas para alugar em São Paulo - SP** should be visible
- [x] Given I click on **Aceita pets** badge
- [x] Then the **Aceita pets** badge should change the background

## Cenários Falho Testado

- [x] Given I am on the **Zap Imóveis** page
- [x] And I type on home input **Cobertura para alugar na cidade de São Paulo**
- [x] When I click on home button **Buscar**
- [x] Then the text **Coberturas para alugar em São Paulo - SP** should **not** be visible

## Relatórios

### Cenário sucesso

#### Imagem
![relatório de sucesso](./cypress-zap-imoveis/reports-images/SuccessScenario.png)

---

### Cenário falho

#### Imagem

![relatório falho](./cypress-zap-imoveis/reports-images/FailScenario.png)

