class SearchPlaceByHomePage {
  elements = {
    homeDropdownTypeOfHouse: () => cy.get('.l-dropdown__trigger > [data-testid="l-button"]'),
    homeCheckboxTypeOfHouseRoofTop: () => cy.get('[data-testid="undefined-item-0-7"]'),
    homeButtonSearch: () => cy.get('[data-cy="submit"] > [data-testid="l-button"]'),
    homeInputAddress: () => cy.get('input[placeholder="Digite o nome da rua, bairro ou cidade"]'),
    homeCheckboxAddress: () => cy.get('[data-testid="undefined-item-0-0"] > .l-text'),
    buttonToRent: () => cy.get('[data-cy="aluguel-tab"]'),
    buttonSearch: () => cy.get(".action-buttons > .l-button--context-primary"),
    badgeAllowPets: () => cy.get(".fast-filters > :nth-child(2)"),
    badgeAllowPetsActive: () => cy.get(".l-tag-filter--selected"),
    resultText: () => cy.get(".result-wrapper__title > .l-u-color-neutral-12"),
  };

  typeOnHomeInputEndereco(address) {
    this.elements.homeInputAddress().first().type(address);
  }

  clickOnHomeCheckboxEndereco() {
    this.elements.homeCheckboxAddress().click();
  }

  clickOnButtonAlugar() {
    this.elements.buttonToRent().click();
  }

  clickOnHomeDropdownTipoDeImovel() {
    this.elements.homeDropdownTypeOfHouse().click();
  }

  clickOnHomeCheckboxCobertura() {
    this.elements.homeCheckboxTypeOfHouseRoofTop().click({ force: true });
  }

  clickOnHomeButtonBuscar() {
    this.elements.homeButtonSearch().click({ force: true });
  }

  checkResultText(text) {
    this.elements.resultText().should("contain.text", text);
    cy.get("body").click("topRight");
  }

  clickOnBadgeAcaitaPets() {
    this.elements.badgeAllowPets().click();
  }

  checkBadgeActiveAcaitaPets(background, textColor) {
    this.elements.badgeAllowPetsActive().should("have.css", "color", textColor);
    this.elements.badgeAllowPetsActive().should("have.css", "background-color", background);
  }
}

const searchPlaceByFilter = new SearchPlaceByHomePage();

describe("Searchig for places on Zap Imóveis Home Page", () => {
  const inputs = {
    cityName: "São Paulo",
    textColor: "rgb(255, 255, 255)",
    backgroundColor: "rgb(94, 106, 130)",
  };

  beforeEach(() => {
    cy.clearAllCookies();
  });

  it('Given I am on the "Zap Imóveis" page', () => {
    cy.visit("/");
  });

  it(`And I type on home input "${inputs.cityName}"`, { scrollBehavior: false }, () => {
    searchPlaceByFilter.typeOnHomeInputEndereco(inputs.cityName);
  });

  it(`And I click on home "São Paulo - SP" checkbox`, { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnHomeCheckboxEndereco();
  });

  it('And I click on the button "Alugar"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnButtonAlugar();
  });

  it('And I click on home dropdown "Tipo de imovel"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnHomeDropdownTipoDeImovel();
  });

  it('And I click on home option "Cobertura"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnHomeCheckboxCobertura();
  });

  it('When I click on home button "Buscar"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnHomeButtonBuscar();
  });

  it(`Then the text "Coberturas para alugar em São Paulo - SP" should be visible`, { scrollBehavior: false }, () => {
    searchPlaceByFilter.checkResultText("Coberturas para alugar em São Paulo - SP");
  });

  it('Given I click on "Aceita pets" badge', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnBadgeAcaitaPets();
  });

  it('Then the "Aceita pets" badge should change the background"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.checkBadgeActiveAcaitaPets(inputs.backgroundColor, inputs.textColor);
  });
});
