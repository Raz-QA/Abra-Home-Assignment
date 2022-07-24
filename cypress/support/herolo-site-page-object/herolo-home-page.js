import HeroloHomePageHelperFunctions from "./herolo-home-page.helper";
import homePageSelectors from "./home-page-selectors";
import invalidInputTypeCases from "../../fixtures/invalid-input-type-cases.json";
const heroloHomePageHelperFunctions = new HeroloHomePageHelperFunctions();
export default class heroloHomePage {
  //#region   sendUserContactInfo functions
  sendUserContactInfo(formType) {
    heroloHomePageHelperFunctions.addNameToContactUsForm(formType);
    heroloHomePageHelperFunctions.addEmailToContactUsForm(formType);
    heroloHomePageHelperFunctions.addCompanyToContactUsForm(formType);
    heroloHomePageHelperFunctions.addPhoneNumberToContactUsForm(formType);
    heroloHomePageHelperFunctions.confirmForm(formType);
  }

  sendUserContactInvalidInfo(formType, InvalidInputTypeCase) {
    switch (InvalidInputTypeCase) {
      case invalidInputTypeCases.INVALID_NAME:
        heroloHomePageHelperFunctions.addInvalidNameToContactUsForm(formType);
      case invalidInputTypeCases.INVALID_EMAIL:
        heroloHomePageHelperFunctions.addInvalidEmailToContactUsForm(formType);
      case invalidInputTypeCases.INVALID_COMPANY_NAME:
        heroloHomePageHelperFunctions.addInvalidCompanyNameToContactUsForm(formType);
      case invalidInputTypeCases.INVALID_PHONE_NUMBER:
        heroloHomePageHelperFunctions.addInvalidPhoneNumberToContactUsForm(
          formType
        );
      case invalidInputTypeCases.EMPTY_FORM:
        heroloHomePageHelperFunctions.insertAnyValueInContactUsForm(formType);
    }
  }
  //#endregion

  //#region  Open Social-Media Links
  openFacebookLink() {
    cy.get(homePageSelectors.socialMediaFacebookLinkBtn)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
  openLinkdinLink() {
    cy.get(homePageSelectors.socialMediaLinkdinLinkBtn)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
  openAbraSiteLink() {
    cy.get(homePageSelectors.socialMediaAbraSiteLinkBtn)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
  openWhatsappLink() {
    cy.get(homePageSelectors.socialMediaWhatsappLinkBtn)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
  //#endregion

  //#region General Buttons
  clickBackToTopButton() {
    cy.get(homePageSelectors.homePageBackToTopButton).click();
  }
  //#endregion
}
