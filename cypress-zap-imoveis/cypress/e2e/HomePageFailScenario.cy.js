class SearchPlaceByHomePage {
  elements = {
    homeButtonSearch: () => cy.get('[data-cy="submit"] > [data-testid="l-button"]'),
    homeInputAddress: () => cy.get('input[placeholder="Digite o nome da rua, bairro ou cidade"]'),    
    resultText: () => cy.get(".result-wrapper__title > .l-u-color-neutral-12"),
  };

  typeOnHomeInputEndereco(address) {
    this.elements.homeInputAddress().first().type(address);
  }

  clickOnHomeButtonBuscar() {
    this.elements.homeButtonSearch().click({ force: true });
  }

  checkWrongResultText(text) {
    this.elements.resultText().should("not.contain.text", text);    
  }
}

const searchPlaceByFilter = new SearchPlaceByHomePage();

describe("Not searchig for roof top to rent, that allow pets on Zap Imóveis Home Page para alugar na cidade de São Paulo", () => {
  const inputs = {
    textSearch: "Cobertura para alugar na cidade de São Paulo",    
  };

  beforeEach(() => {
    cy.clearAllCookies();
  });

  it('Given I am on the "Zap Imóveis" page', () => {
    cy.visit("/");
  });

  it('And I type on home input text', { scrollBehavior: false }, () => {
    searchPlaceByFilter.typeOnHomeInputEndereco(inputs.textSearch);
  });

  it('When I click on home button "Buscar"', { scrollBehavior: false }, () => {
    searchPlaceByFilter.clickOnHomeButtonBuscar();
  });

  it(`Then the text "Coberturas para alugar em São Paulo - SP" should not be visible`, { scrollBehavior: false }, () => {
    searchPlaceByFilter.checkWrongResultText("Coberturas para alugar em São Paulo - SP");
  });
})