import "./commands";

before("Enter Home Page", () => {
  cy.enterHeroloHomePage();
});
