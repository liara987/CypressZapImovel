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

  Background:
    Given I go to the Zap Imóveis page
    And I see "ZAP Imóveis" in the title

  As a user I want to search for places ready to live
  Scenario: Using the home page to search for "Pronta para morar"
    Given I click on the dropdown menu with title "Lançamentos"
    And I click on the "Pronto para morar" option
    Then the text "Pronto para morar" should be visible on the bottom part of the image result

  As a user I want to search for places rent
  Scenario: Using the "Pronta para morar" page to filter for "Alugar"
    Given I am at the "Pronta para morar" page
    And I click on the "Alugar" button
    Then the text "Imóveis para Alugar" should be visible on the page

  As a user I want to search for places in São Paulo
  Scenario: Using the "Pronta para morar" page to show places on "São Paulo"
    Given I am at the "Pronta para morar" page
    And I text on the search place field "São Paulo"
    And I click on the checkbox with the content "São Paulo - SP"
    Then the text "Imóveis para alugar em São Paulo - SP" should be visible on the page

  As a user I want to search for Roof top to rent
  Scenario: Using the "Pronta para morar" page to search for "Cobertura"
    Given I am at the "Pronta para morar" page
    And I click on the dropdown button with the title "Todos os imóveis"
    And I click on the checkbox with the span content "Cobertura"
    When I click on the submit button with the content "Buscar Imóveis"
    Then the text "Coberturas para alugar em São Paulo - SP" should be visible on the page

  As a user I want to search for places that allow pets
  Scenario: Using the "Pronta para morar" page to search for "Aceitar Pets"
    Given I am at the "Pronta para morar" page
    And I click on the checkbox with the span content "Aceita pets"
    When I click on the first result element
    Then the text "Animais permitidos" should be visible on the page
