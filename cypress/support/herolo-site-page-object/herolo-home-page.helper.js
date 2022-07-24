import homePageSelectors from "./home-page-selectors";
import contactUsFormTypes from "../../fixtures/contact-us-forms-types.json";
import socialMediaSites from "../../fixtures/social-media-sites.json";
import invalidNameValues from "../../fixtures/invalid-contact-us-form-values/invalid-name-values.json";
import invalidEmailValues from "../../fixtures/invalid-contact-us-form-values/invalid-email-values.json";
import invalidCompanyNameValues from "../../fixtures/invalid-contact-us-form-values/invalid-company-values.json";
import invalidPhoneNumberValues from "../../fixtures/invalid-contact-us-form-values/invalid-phone-num-values.json";
import invalidInputTypeCases from "../../fixtures/invalid-input-type-cases.json";

let namesList = require("@stdlib/datasets-male-first-names-en");
let formTypeLocator;

export default class heroloHomePageHelperFunctions {
  //#region Form Functions
  addNameToContactUsForm(formType) {
    let formTypeNameLocator = "";
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypeNameLocator =
          homePageSelectors.contactUsFormSectionNameInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypeNameLocator =
          homePageSelectors.contactUsFormFooterNameInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypeNameLocator =
          homePageSelectors.contactUsFormPopUpNameInputField;
        break;
      }
    }

    cy.scrollToElement(formTypeLocator);
    cy.get(formTypeLocator)
      .find(formTypeNameLocator)
      .type(this.generatesValidFirstName(), {
        force: true,
      });
  }

  addEmailToContactUsForm(formType) {
    let formTypeEmailLocator = " ";
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormSectionEmailInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormFooterEmailInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormPopUpEmailInputField;
        break;
      }
    }
    cy.scrollToElement(formTypeLocator);
    cy.get(formTypeLocator)
      .find(formTypeEmailLocator)
      .type(this.generatesValidEmail(), {
        force: true,
      });
  }

  addPhoneNumberToContactUsForm(formType) {
    let formTypePhoneLocator;
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormSectionPhoneNumInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormFooterPhoneNumInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormPopUpPhoneNumInputField;
        break;
      }
    }
    cy.scrollToElement(formTypeLocator);
    cy.get(formTypeLocator)
      .find(formTypePhoneLocator)
      .type(this.generatesValidPhoneNumber(), {
        force: true,
      });
  }

  addCompanyToContactUsForm(formType) {
    let formTypeCompanyLocator;
    if (formType === contactUsFormTypes.SECTION) {
      formTypeLocator = homePageSelectors.contactUsFormSection;
      formTypeCompanyLocator =
        homePageSelectors.contactUsFormSectionCompanyInputField;
      cy.scrollToElement(formTypeLocator);
      cy.get(formTypeLocator)
        .find(formTypeCompanyLocator)
        .type(this.generatesValidCompanyName(), { force: true });
    }
  }

  confirmForm(formType) {
    let confirmBtnLocator, confirmBtnTitle;
    if (formType === "Section") {
      formTypeLocator = homePageSelectors.contactUsFormSection;
      confirmBtnLocator = homePageSelectors.confirmBtnSectionFormLocator;
      confirmBtnTitle = "דברו איתנו";
    } else if (formType === "Footer") {
      formTypeLocator = homePageSelectors.contactUsFormFooter;
      confirmBtnLocator = homePageSelectors.confirmBtnFooterFormLocator;
      confirmBtnTitle = "שליחה";
    } else if (formType === "Pop-up") {
      formTypeLocator = homePageSelectors.contactUsFormPopUp;
      confirmBtnLocator = homePageSelectors.confirmBtnPopUpFormLocator;
      confirmBtnTitle = "לחצו לקבלת שיחה";
    }
    cy.scrollToElement(homePageSelectors.homePageHeader);
    cy.get(formTypeLocator).find(confirmBtnLocator).click({ force: true });
  }
  //#endregion

  //#region Add Invalid Values
  addInvalidNameToContactUsForm(formType) {
    let formTypeNameLocator = "";
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypeNameLocator =
          homePageSelectors.contactUsFormSectionNameInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypeNameLocator =
          homePageSelectors.contactUsFormFooterNameInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypeNameLocator =
          homePageSelectors.contactUsFormPopUpNameInputField;
        break;
      }
    }
    cy.scrollToElement(formTypeLocator);
    cy.get(formTypeLocator)
      .find(formTypeNameLocator)
      .type(this.typeInvalidNameInput(), {
        force: true,
      });
  }

  addInvalidEmailToContactUsForm(formType) {
    let formTypeEmailLocator = "";
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormSectionEmailInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormFooterEmailInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormPopUpEmailInputField;
        break;
      }
    }
    cy.scrollToElement(formTypeLocator);
    let invalidEmailInput = this.typeInvalidPhoneNumberInput();
    cy.get(formTypeLocator)
      .find(formTypeEmailLocator)
      .clear({ force: true })

      .type(this.typeInvalidEmailInput(), {
        force: true,
      });
    cy.wrap(invalidEmailInput).as("chosenInvalidEmailInput");
  }

  addInvalidPhoneNumberToContactUsForm(formType) {
    let formTypePhoneLocator;
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormSectionPhoneNumInputField;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormFooterPhoneNumInputField;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormPopUpPhoneNumInputField;
        break;
      }
    }

    cy.scrollToElement(formTypeLocator);
    let invalidPhoneNumberInput = this.typeInvalidPhoneNumberInput();
    cy.get(formTypeLocator)
      .find(formTypePhoneLocator)
      .clear({ force: true })
      .type(invalidPhoneNumberInput, {
        force: true,
      });
    cy.wrap(invalidPhoneNumberInput).as("chosenInvalidPhoneNumberInput");
  }

  addInvalidCompanyNameToContactUsForm(formType) {
    let formTypeCompanyLocator;
    if (formType === contactUsFormTypes.SECTION) {
      formTypeLocator = homePageSelectors.contactUsFormSection;
      formTypeCompanyLocator =
        homePageSelectors.contactUsFormSectionCompanyInputField;
      cy.scrollToElement(formTypeLocator);
      cy.get(formTypeLocator)
        .find(formTypeCompanyLocator)
        .clear({ force: true })
        .type(this.typeInvalidCompanyNameInput(), { force: true });
    }
  }

  insertAnyValueInContactUsForm(formType) {
    let formTypeNameLocator = "",
      formTypeEmailLocator = "",
      formTypeCompanyLocator = "",
      formTypePhoneLocator = "",
      confirmBtnLocator = "",
      confirmBtnTitle = "";

    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        formTypeNameLocator =
          homePageSelectors.contactUsFormSectionNameInputField;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormSectionEmailInputField;
        formTypeCompanyLocator =
          homePageSelectors.contactUsFormSectionCompanyInputField;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormSectionPhoneNumInputField;
        confirmBtnLocator = homePageSelectors.confirmBtnSectionFormLocator;
        confirmBtnTitle = "דברו איתנו";
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        formTypeNameLocator =
          homePageSelectors.contactUsFormFooterNameInputField;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormFooterEmailInputField;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormFooterPhoneNumInputField;
        confirmBtnLocator = homePageSelectors.confirmBtnFooterFormLocator;
        confirmBtnTitle = "שליחה";
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        formTypeNameLocator =
          homePageSelectors.contactUsFormPopUpNameInputField;
        formTypeEmailLocator =
          homePageSelectors.contactUsFormPopUpEmailInputField;
        formTypePhoneLocator =
          homePageSelectors.contactUsFormPopUpPhoneNumInputField;
        confirmBtnLocator = homePageSelectors.confirmBtnPopUpFormLocator;
        confirmBtnTitle = "לחצו לקבלת שיחה";
        break;
      }
    }

    cy.scrollToElement(formTypeLocator);
    cy.get(formTypeLocator).find(formTypeNameLocator).clear({ force: true });
    cy.get(formTypeLocator).find(formTypeEmailLocator).clear({ force: true });
    if (formType === contactUsFormTypes.SECTION) {
      cy.get(formTypeLocator)
        .find(formTypeCompanyLocator)
        .clear({ force: true });
    }
    cy.get(formTypeLocator).find(formTypePhoneLocator).clear({ force: true });

    cy.get(formTypeLocator).find(confirmBtnLocator).click({ force: true });
  }

  typeInvalidNameInput() {
    return invalidNameValues.blankField;
  }
  typeInvalidEmailInput() {
    let values = Object.values(invalidEmailValues);
    let randomizeValueIndex = parseInt(Math.random() * values.length);
    let randomInvalidEmailValue = values[randomizeValueIndex];
    return randomInvalidEmailValue;
  }

  typeInvalidCompanyNameInput() {
    return invalidCompanyNameValues.blankField;
  }

  typeInvalidPhoneNumberInput() {
    let values = Object.values(invalidPhoneNumberValues);
    let randomizeValueIndex = parseInt(Math.random() * values.length);
    let randomInvalidPhoneNumValue = values[randomizeValueIndex];
    return randomInvalidPhoneNumValue;
  }

  //#endregion

  //#region Generate Values
  generatesValidEmail() {
    let validEmailChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let emailUsername = "";
    let generatedEmail;

    // Randomize the first string part of the email (known as the 'email username')
    for (let i = 0; i < 15; i++) {
      emailUsername +=
        validEmailChars[Math.floor(Math.random() * validEmailChars.length)];
    }
    generatedEmail = `${emailUsername}@email.com`;
    return generatedEmail;
  }

  generatesValidFirstName() {
    let firstNamesList = namesList();
    let firstNamesListLength = firstNamesList.length;
    let indexName;

    // Select random names from the list
    indexName = Math.floor(Math.random() * firstNamesListLength);
    return firstNamesList[indexName];
  }

  generatesValidPhoneNumber() {
    let minNum = 10000000,
      maxNum = 99999999;

    let randomizeEightDigitNumber = Math.floor(
      Math.random() * (maxNum - minNum + 1) + minNum
    );
    let generatedPhoneNumber = `05${randomizeEightDigitNumber}`;
    return generatedPhoneNumber;
  }

  generatesValidCompanyName() {
    let validCompanyNameChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let companyName = "";

    for (let i = 0; i < 15; i++) {
      companyName +=
        validCompanyNameChars[
          Math.floor(Math.random() * validCompanyNameChars.length)
        ];
    }
    return companyName;
  }
  //#endregion

  //#region  Arrange Functions
  waitUntilContactUsPopUpWindowAppear() {
    cy.intercept({
      method: "GET", // Route all GET requests
      url: "https://automation.herolo.co.il/static/Hero-desktop-b352c31bfbe6e9308f4d5cb539421b54.png", // that have a URL that matches '/users/*'
    }).as("getPopUpWindow");
    cy.get("@getPopUpWindow", { timeout: 1000000 });
  }
  //#endregion

  //#region Assert Functions
  assertArrivingToThankYouPage() {
    cy.wait(2000);
    cy.url().should("eq", "https://automation.herolo.co.il/thank-you/");
    cy.get("body")
      .should("contain.text", "תודה!")
      .and("contain.text", "עבור לאתר");
  }

  assertScrollingToPageHeader() {
    cy.get(homePageSelectors.homePageHeader)
      .should("have.id", "logom")
      .and("contain.text", "אנחנו הירולו")
      .and("contain.text", "מפתחים בשפה שלך");
  }

  assertArrivingToChosenPage(socialMediaSite) {
    switch (socialMediaSite) {
      case socialMediaSites.FACEBOOK:
        cy.waitForTheElementsToLoad();
        cy.url().should("eq", "https://www.facebook.com/Herolofrontend");
        cy.get("body")
          .should("contain.text", "Facebook")
          .and("contain.text", "Your Request Couldn't be Processed");
        break;
      case socialMediaSites.LINKDIN:
        cy.waitForTheElementsToLoad();
        cy.log(
          "To make this test to work," +
            "you must enter your Linkdin account in the cypress:chrome browser"
        );
        cy.url().should(
          "eq",
          "https://www.linkedin.com/company/abra-web-and-mobile-herolo/"
        );
        cy.get(".ph5.pt3")
          .should("contain.text", "abra | Web & Mobile")
          .and(
            "contain.text",
            "Fullstack Development Experts: React, Angular VUE, React native, Python Django, Node.JS and more."
          );

        break;
      case socialMediaSites.ABRA_SITE:
        cy.waitForTheElementsToLoad();
        cy.url().should("eq", "https://herolo.co.il/he/?lang=he");
        cy.get(
          ".NewWelcomeSectionstyles__StyledWelcomeSectionContent-sc-1f6i25i-3.bSmDmH"
        )
          .should(
            "contain.text",
            "בית פיתוח תוכנה מזן מיוחד." + "גיבורי-העל שלנו לשירותך."
          )
          .and("contain.text", "צפו בסרטון");
        break;
      case socialMediaSites.WHATSAPP:
        cy.waitForTheElementsToLoad();
        cy.url().should(
          "eq",
          "https://api.whatsapp.com/send?phone=972544945333"
        );
        cy.get("body")
          .should("contain.text", "WhatsApp")
          .and("contain.text", "Continue to Chat");
        break;
    }
  }
  assertInvalidValueHasBeenTyped(formType, InvalidInputTypeCase) {
    let chosenInvalidEmailCase, chosenInvalidPhoneNumCase;

    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        break;
      }
    }
    if (InvalidInputTypeCase === invalidInputTypeCases.INVALID_NAME) {
      cy.get(formTypeLocator).should("contain.text", "שדה שם הוא שדה חובה");
    } else if (InvalidInputTypeCase === invalidInputTypeCases.INVALID_EMAIL) {
      cy.get("@chosenInvalidEmailInput").then(($chosenInvalidEmailInput) => {
        chosenInvalidEmailCase = $chosenInvalidEmailInput.toString();
        if (chosenInvalidEmailCase === " ") {
          cy.get(formTypeLocator).should(
            "contain.text",
            "שדה אימייל הוא שדה חובה"
          );
        } else {
          cy.get(formTypeLocator).should(
            "contain.text",
            "כתובת אימייל לא חוקית"
          );
        }
      });
    } else if (
      InvalidInputTypeCase === invalidInputTypeCases.INVALID_COMPANY_NAME
    ) {
      cy.get(formTypeLocator).should("contain.text", "שדה חברה הוא שדה חובה");
    } else if (
      InvalidInputTypeCase === invalidInputTypeCases.INVALID_PHONE_NUMBER
    ) {
      cy.get("@chosenInvalidPhoneNumberInput").then(
        ($chosenInvalidPhoneNumberInput) => {
          chosenInvalidPhoneNumCase = $chosenInvalidPhoneNumberInput.toString();
          if (chosenInvalidPhoneNumCase === " ") {
            cy.get(formTypeLocator).should(
              "contain.text",
              "שדה טלפון הוא שדה חובה"
            );
          } else {
            cy.get(formTypeLocator).should(
              "contain.text",
              "מספר טלפון לא חוקי"
            );
          }
        }
      );
    }
  }
  assertNoValueHasBeenTyped(formType) {
    switch (formType) {
      case contactUsFormTypes.SECTION: {
        formTypeLocator = homePageSelectors.contactUsFormSection;
        break;
      }
      case contactUsFormTypes.FOOTER: {
        formTypeLocator = homePageSelectors.contactUsFormFooter;
        break;
      }
      case contactUsFormTypes.POP_UP: {
        formTypeLocator = homePageSelectors.contactUsFormPopUp;
        break;
      }
    }
    cy.get(formTypeLocator)
      .should("contain.text", "שדה שם הוא שדה חובה")
      .and("contain.text", "שדה אימייל הוא שדה חובה")
      .and("contain.text", "שדה טלפון הוא שדה חובה");
    if (formType === contactUsFormTypes.SECTION) {
      cy.get(formTypeLocator).should("contain.text", "שדה חברה הוא שדה חובה");
    }
  }
  //#endregion
}
