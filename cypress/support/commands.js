//#region  Cypress Custom Commands
Cypress.Commands.add("enterHeroloHomePage", () => {
  cy.visit(`${Cypress.config().baseUrl}`);
});

Cypress.Commands.add("scrollToElement", (elementLocator) => {
  cy.get(elementLocator).scrollIntoView({ duration: 2000 });
  cy.wait(500);
});

Cypress.Commands.add("openWhatsAppSideLink", () => {
  cy.get(".callUsWhatsapp__BtnWhatsapp-rkzbui-0.cjunrQ").as(
    "whatsAppSideLinkBtn"
  );
  cy.get("@whatsAppSideLinkBtn").invoke("removeAttr", "target").click();

  cy.on("window:confirm", (buttonText) => {
    return false;
  });
});

Cypress.Commands.add("returnToThePreviousPage", () => {
  cy.go(-1);
});

Cypress.Commands.add("waitForTheElementsToLoad", () => {
    cy.wait(2000)
  });
  //#endregion