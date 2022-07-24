/// <reference types="cypress"/>
import HeroloHomePage from "../support/herolo-site-page-object/herolo-home-page";
import HeroloHomePageArrangeAssertFunctions from "../support/herolo-site-page-object/herolo-home-page.helper";
import homePageSelectors from "../support/herolo-site-page-object/home-page-selectors";
import contactUsFormTypes from "../fixtures/contact-us-forms-types.json";
import socialMediaSites from "../fixtures/social-media-sites.json";
import invalidInputTypeCases from "../fixtures/invalid-input-type-cases.json";

const heroloHomePage = new HeroloHomePage();
const heroloHomePageArrangeAssertFunctions =
  new HeroloHomePageArrangeAssertFunctions();

describe("Filling Contact Us Forms", () => {
  beforeEach("Scroll to the page header", () => {
    // Arrange
    cy.scrollToElement(homePageSelectors.homePageHeader);
  });

  describe("Contact Us Form - (Contact Us Section)", () => {
    it("Send Contact Info", () => {
      // Act
      heroloHomePage.sendUserContactInfo(contactUsFormTypes.SECTION);

      // Assert
      heroloHomePageArrangeAssertFunctions.assertArrivingToThankYouPage();
      cy.returnToThePreviousPage();
    });

    describe("Send Contact Info - Negative Testing", () => {
      it("Type Invalid Name", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_NAME
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_NAME
        );
      });

      it("Type Invalid Email", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_EMAIL
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_EMAIL
        );
      });

      it("Type Invalid Company-Name", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_COMPANY_NAME
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_COMPANY_NAME
        );
      });

      it("Type Invalid Phone Number", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );
      });

      it("Send Empty Input Fields", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.SECTION,
          invalidInputTypeCases.EMPTY_FORM
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertNoValueHasBeenTyped(
          contactUsFormTypes.SECTION
        );
      });
    });
  });

  describe("Contact Us Form - (Contact Us Footer)", () => {
    it("Send Contact Info", () => {
      // Act
      heroloHomePage.sendUserContactInfo(contactUsFormTypes.FOOTER);

      // Assert
      heroloHomePageArrangeAssertFunctions.assertArrivingToThankYouPage();
      cy.returnToThePreviousPage();
    });

    describe("Send Contact Info - Negative Testing", () => {
      it("Type Invalid Name", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_NAME
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_NAME
        );
      });
      it("Type Invalid Email", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_EMAIL
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_EMAIL
        );
      });

      it("Type Invalid Phone-Number", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );
      });

      it("Send Empty Input Fields ", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormTypes.FOOTER,
          invalidInputTypeCases.EMPTY_FORM
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertNoValueHasBeenTyped(
          contactUsFormTypes.FOOTER
        );
      });
    });
  });

  describe("Contact Us Form - (Contact Us Pop Up)", () => {
    it("Send Contact Info", () => {
      // Act
      cy.wait(30000);
      heroloHomePage.sendUserContactInfo(contactUsFormTypes.POP_UP);

      // Assert
      heroloHomePageArrangeAssertFunctions.assertArrivingToThankYouPage();
      cy.returnToThePreviousPage();
    });
    describe("Send Contact Info - Negative Testing", () => {
      it("Type Invalid Name", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_NAME
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_NAME
        );
      });

      it("Type Invalid Email", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_EMAIL
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_EMAIL
        );
      });

      it("Type Invalid Phone-Number", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertInvalidValueHasBeenTyped(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.INVALID_PHONE_NUMBER
        );
      });

      it("Send Empty Input Fields", () => {
        // Act
        heroloHomePage.sendUserContactInvalidInfo(
          contactUsFormType.POP_UP,
          invalidInputTypeCases.EMPTY_FORM
        );

        // Assert
        heroloHomePageArrangeAssertFunctions.assertNoValueHasBeenTyped(
          contactUsFormType.POP_UP
        );
      });
    });
  });
});

describe("Open social media sites", () => {
  beforeEach("Scroll down to the bottom page border", () => {
    // Arrange
    cy.scrollToElement(homePageSelectors.homePageBottomBorder);
  });

  it("Open Facebook Link", () => {
    // Act
    heroloHomePage.openFacebookLink();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertArrivingToChosenPage(
      socialMediaSites.FACEBOOK
    );
  });

  it("Open Linkdin Link", () => {
    // Act
    heroloHomePage.openLinkdinLink();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertArrivingToChosenPage(
      socialMediaSites.LINKDIN
    );
  });

  it("Open Abra Site Link", () => {
    // Act
    heroloHomePage.openAbraSiteLink();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertArrivingToChosenPage(
      socialMediaSites.ABRA_SITE
    );
  });

  it("Open Whatsapp Link", () => {
    // Act
    heroloHomePage.openWhatsappLink();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertArrivingToChosenPage(
      socialMediaSites.WHATSAPP
    );
  });

  it("Open Whatsapp Side Link", () => {
    // Act
    cy.openWhatsAppSideLink();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertArrivingToChosenPage(
      socialMediaSites.WHATSAPP
    );
  });
  afterEach("Return to the Home Page", () => {
    cy.returnToThePreviousPage();
  });
});

describe("General Buttons Tests", () => {
  it("Click BackToTop button", () => {
    // Arrange
    cy.scrollToElement(homePageSelectors.homePageBottomBorder);

    // Act
    heroloHomePage.clickBackToTopButton();

    // Assert
    heroloHomePageArrangeAssertFunctions.assertScrollingToPageHeader();
  });
});
