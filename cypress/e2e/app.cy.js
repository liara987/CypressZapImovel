class SearchPlaceByFilter {
  elements = {
    currentUrl: () => cy.url(),
    dropdownReleases: () => cy.get(".header-secondary__dropdown.p-3 > :nth-child(1) > .header-secondary__nav-item > .header-secondary__nav-link"),
    dropdownItemReadyToMoveIn: () => cy.get(".active > :nth-child(3) > a"),
    buttonToRent: () => cy.get('[data-cy="aluguel-tab"]'),
    dropdownTypeOfHouse: () => cy.get('.l-dropdown__trigger > .multiselect__button > [data-testid="l-button"]'),
    checkboxTypeOfHouseRoofTop: () => cy.get(":nth-child(1) > :nth-child(9) > :nth-child(1) > .l-checkbox"),
    buttonSearch: () => cy.get(".action-buttons > .l-button--context-primary"),
    badgeAllowPets: () => cy.get(".fast-filters > :nth-child(2)"),
    badgeAllowPetsActive: () => cy.get(".l-tag-filter--selected"),
    inputAddress: () => cy.get('input[placeholder="Digite o nome da rua, bairro ou cidade"]'),
    checkboxAddress: () => cy.get(":nth-child(2) > :nth-child(2) > :nth-child(1) > .l-checkbox"),
    resultText: () => cy.get(".result-wrapper__title > .l-u-color-neutral-12"),
  };

  checkResultText(text) {
    this.elements.resultText().should("contain.text", text);
    cy.get("body").click("topRight");
  }

  clickOnResultText() {
    this.elements.resultText().click();
  }

  currentUrlIsProntoParaMorar(url) {
    this.elements.currentUrl().should("eq", url);
  }

  clickOnDropdownLançamentos() {
    this.elements.dropdownReleases().click();
  }

  clickOnItemProntoParaMorar() {
    this.elements.dropdownItemReadyToMoveIn().click();
  }

  clickOnButtonAlugar() {
    this.elements.buttonToRent().click();
  }

  clickOnDropdownTipoDeImovel() {
    this.elements.dropdownTypeOfHouse().click();
  }

  clickOnCheckboxCobertura() {
    this.elements.checkboxTypeOfHouseRoofTop().click();
  }

  clickOnBadgeAcaitaPets() {
    this.elements.badgeAllowPets().click();
  }

  checkBadgeActiveAcaitaPets(background, textColor) {
    this.elements.badgeAllowPetsActive().should("have.css", "color", textColor);
    this.elements.badgeAllowPetsActive().should("have.css", "background-color", background);
  }

  clickOnButtonBuscar() {
    this.elements.buttonSearch().click({ force: true });
  }

  typeOnInputEndereco(address) {
    this.elements.inputAddress().first().type(address);
  }

  clickOnCheckboxEndereco() {
    this.elements.checkboxAddress().click();
  }
}

const searchPlaceByFilter = new SearchPlaceByFilter();

describe("Searchig for places ready to rent", () => {
  const inputs = {
    cityName: "São Paulo",
    urlProntoParaMorar: "/lancamentos/imoveis/pronto-para-morar/",
    textColor: "rgb(255, 255, 255)",
    backgroundColor: "rgb(94, 106, 130)",
  };

  // it('Given I am on the "Zap Imóveis" page', () => {
  //   cy.visit("/");
  // });

  // it('And I click on the dropdown menu with title "Lançamentos"', () => {
  //   searchPlaceByFilter.clickOnDropdownLançamentos();
  // });

  // it('When I click on the "Pronto para morar" option', () => {
  //   searchPlaceByFilter.clickOnItemProntoParaMorar();
  // });

  // it('Then I shoud go to the "Pronto para morar" page', () => {
  //   searchPlaceByFilter.currentUrlIsProntoParaMorar(inputs.urlProntoParaMorar);
  // });

  it('Given I am on the "Pronto para morar" page', () => {
    cy.visit(inputs.urlProntoParaMorar);
    cy.clearAllCookies();
  });

  it('And I click on the button "Alugar"', () => {
    searchPlaceByFilter.clickOnButtonAlugar();
  });

  it('And I click on the dropdown "Tipo de imovel"', () => {
    searchPlaceByFilter.clickOnDropdownTipoDeImovel();
  });

  it('And I click on the option "Cobertura"', () => {
    searchPlaceByFilter.clickOnCheckboxCobertura();
  });

  it('When I click on button "Buscar"', () => {
    searchPlaceByFilter.clickOnButtonBuscar();
  });

  it('Then the text "Coberturas para alugar" should be visible', () => {
    searchPlaceByFilter.checkResultText("Coberturas para alugar");
  });

  it('Given I click on "Aceita pets" badge', () => {
    searchPlaceByFilter.clickOnBadgeAcaitaPets();
  });

  it('Then the "Aceita pets" badge should change the background"', () => {
    searchPlaceByFilter.checkBadgeActiveAcaitaPets(inputs.backgroundColor, inputs.textColor);
  });

  it(`Given I type on the input the "${inputs.cityName}" name`, () => {
    searchPlaceByFilter.typeOnInputEndereco(inputs.cityName);
  });

  it(`When I click on "${inputs.cityName}" checkbox`, () => {
    searchPlaceByFilter.clickOnCheckboxEndereco();
  });

  it(`Then the text 'Coberturas para alugar em São Paulo - SP' should be visible`, () => {
    searchPlaceByFilter.checkResultText("Coberturas para alugar em São Paulo - SP");
    searchPlaceByFilter.clickOnResultText({ force: true });
  });
});
