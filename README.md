# Case Técnico OLX - Desenvolvimento com foco em Qualidade
[![Cypress Tests - Zap Imóveis Home Page](https://github.com/liara987/CypressZapImovel/actions/workflows/cypress-zap-imoveis.yml/badge.svg)](https://github.com/liara987/CypressZapImovel/actions/workflows/cypress-zap-imoveis.yml)

## Tecnologias

- Cypress - v13.12.0
- Node - v20.13.1

## Como testar

- Tenha o **git** instalado
- Clone o repositório ```git clone https://github.com/liara987/CypressZapImovel.git```
- Acesse a na pasta do projeto no terminal e digite ```cd cypress-zap-imoveis```
- Instale as dependencias ```npm i```
- Rode o comando ```npm run cypress:web```
- Click en **E2E Testing**
- Selecione o navegador **Electron**
- Click em **Start E2E Testing in Electron**
- Então click no arquivo **HomePage.cy.js**
- Os testes cimeçarão a rodar

## Cenários Testado

- [x] Given I am on the **Zap Imóveis** page
- [x] And I type on home input **São Paulo**
- [x] And I click on home **São Paulo - SP** checkbox
- [x] And I click on the button **Alugar**
- [x] And I click on home dropdown **Tipo de imovel**
- [x] And I click on home option **Cobertura**
- [x] When I click on home button **Buscar**
- [x] Then the text **Coberturas para alugar em São Paulo - SP** should bevisible'
- [x] Given I click on **Aceita pets** badge
- [x] Then the **Aceita pets** badge should change the background
